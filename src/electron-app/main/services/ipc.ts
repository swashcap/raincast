/**
 * Response handlers for renderer IPC requests.
 *
 * {@link https://electronjs.org/docs/api/ipc-main}
 */
import ip from 'ip'
import electronSettings from 'electron-settings'
import { ipcMain } from 'electron'

import * as channels from '../../shared/channels'
import { darkSky } from './dark-sky'
import debug from '../utils/debug'
import getPort from '../utils/get-port'
import { weatherAlerts } from './weather-alerts'

export const handlers = new Map()

const setHandler = (
  [requestChannel, responseChannel, errorChannel],
  handler
) => {
  handlers.set(requestChannel, event => {
    debug('request: %s', requestChannel)
    handler()
      .then(response => {
        debug('response: %s', responseChannel)
        event.sender.send(responseChannel, response)
      })
      .catch(error => {
        debug('error: %s %O', errorChannel)
        console.error(error)
        event.sender.send(errorChannel, error.message)
      })
  })
}

setHandler(
  [
    channels.serverConfigRequest,
    channels.serverConfigResponse,
    channels.serverConfigError,
  ],
  () => getPort().then(port => `http://${ip.address()}:${port}`)
)

setHandler(
  [channels.forecastRequest, channels.forecastResponse, channels.forecastError],
  () => {
    const apiKey = electronSettings.get('apiKey')

    if (!apiKey) {
      return Promise.reject(new Error('No API key'))
    }

    return darkSky({ apiKey })
  }
)

setHandler(
  [
    channels.weatherAlertsRequest,
    channels.weatherAlertsResponse,
    channels.weatherAlertsError,
  ],
  () => weatherAlerts({})
)

export const off = () => {
  handlers.forEach((handler, channel) => {
    ipcMain.removeListener(channel, handler)
  })
}

export const on = () => {
  handlers.forEach((handler, channel) => {
    ipcMain.on(channel, handler)
  })
}
