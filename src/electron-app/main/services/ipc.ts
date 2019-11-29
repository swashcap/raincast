/**
 * Response handlers for renderer IPC requests.
 *
 * {@link https://electronjs.org/docs/api/ipc-main}
 */
import { ipcMain, IpcMainInvokeEvent } from 'electron'

import * as channels from '../../shared/channels'
import debug from '../utils/debug'
import { config } from './config'
import { forecast } from './forecast'
import { weatherAlerts } from './weatherAlerts'

export const handlers = new Map<string, (event: IpcMainInvokeEvent) => any>()

const setHandler = (
  [requestChannel, responseChannel, errorChannel]: [string, string, string],
  handler: () => Promise<any>
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
  [channels.configError, channels.configResponse, channels.configError],
  config
)

setHandler(
  [channels.forecastRequest, channels.forecastResponse, channels.forecastError],
  forecast
)

setHandler(
  [
    channels.weatherAlertsRequest,
    channels.weatherAlertsResponse,
    channels.weatherAlertsError,
  ],
  weatherAlerts
)

export const removeListeners = () => {
  handlers.forEach((handler, channel) => {
    ipcMain.removeListener(channel, handler)
  })
}

export const addListeners = () => {
  handlers.forEach((handler, channel) => {
    ipcMain.on(channel, handler)
  })
}
