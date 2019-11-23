/**
 * Promise wrapper for Electron's `net` module.
 *
 * {@link https://electronjs.org/docs/api/net}
 */

import { net, ClientRequestConstructorOptions } from 'electron'

import debug from './debug'

export type RequestOptions = string | ClientRequestConstructorOptions & {
  headers: Record<string, string | string[]>
}

/**
 * Make a network request
 *
 * Uses {@link https://electronjs.org/docs/api/net#netrequestoptions}.
 *
 * @param {Object} options Passed to `electron.ClientRequest`
 * @returns {Promise}
 */
export const request = (options: RequestOptions): Promise<string> => new Promise((resolve, reject) => {
  const req = net.request(options)
  let data = ''
  let error

  // The `close` event should always be called last
  req.on('close', () => {
    if (error) {
      reject(error)
    } else {
      resolve(data)
    }
  })
  req.on('error', (err) => {
    debug('request error: %O', err)
    error = err
  })

  /**
   * Returns an `IncomingMessage` instance
   * {@link https://electronjs.org/docs/api/incoming-message}
   */
  req.on('response', (res) => {
    debug('response: %O', {
      headers: res.headers,
      httpVersion: res.httpVersion,
      statusCode: res.statusCode,
      statusMessage: res.statusMessage
    })

    res.on('end', () => debug('response end'))
    res.on('aborted', () => debug('response aborted'))
    res.on('data', (chunk) => {
      data += chunk
    })
    res.on('error', (err) => {
      debug('response error: %O', err)
      error = err
    })
  })

  req.on('login', (authInfo, callback) => {
    debug('request login: %O', authInfo)
    error = new Error('login not implemented!')
    // @ts-ignore
    callback()
  })
  req.on('finish', () => debug('request finish'))
  req.on('abort', () => debug('request aborted'))
  req.on('redirect', (statusCode, method, redirectUrl, responseHeaders) => {
    debug('request redirect: %O', {
      method,
      redirectUrl,
      responseHeaders,
      statusCode
    })
  })
  req.end()
})

