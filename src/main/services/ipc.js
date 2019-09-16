/**
 * Response handlers for renderer IPC requests.
 *
 * {@link https://electronjs.org/docs/api/ipc-main}
 */
const ip = require('ip')
const electronSettings = require('electron-settings')
const { ipcMain } = require('electron')

const channels = require('../../shared/channels.js')
const darkSky = require('./dark-sky.js')
const debug = require('../utils/debug.js')
const getPort = require('../utils/get-port.js')
const weatherAlerts = require('./weather-alerts.js')

const handlers = new Map()

const setHandler =
  ([requestChannel, responseChannel, errorChannel], handler) => {
    handlers.set(requestChannel, (event) => {
      debug('request: %s', requestChannel)
      handler()
        .then((response) => {
          debug('response: %s', responseChannel)
          event.sender.send(responseChannel, response)
        })
        .catch((error) => {
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
    channels.serverConfigError
  ],
  () => getPort().then((port) => `http://${ip.address()}:${port}`)
)

setHandler(
  [
    channels.forecastRequest,
    channels.forecastResponse,
    channels.forecastError
  ],
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
    channels.weatherAlertsError
  ],
  () => weatherAlerts({})
)

module.exports = {
  handlers,
  off () {
    handlers.forEach((handler, channel) => {
      ipcMain.removeListener(channel, handler)
    })
  },
  on () {
    handlers.forEach((handler, channel) => {
      ipcMain.on(channel, handler)
    })
  }
}
