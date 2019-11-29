import { ipcRenderer, IpcRenderer } from 'electron'
import { push } from 'connected-react-router'

import {
  forecastError,
  forecastResponse,
} from '../../../shared/actions/forecast'
import { configError, configResponse } from '../../../shared/actions/config'

import * as channels from '../../shared/channels'

import {
  weatherAlertsError,
  weatherAlertsResponse,
} from '../../../shared/actions/weatherAlerts'
import { Action, ErrorAction } from '../../../shared/types'

type HandlerReturnValue = Action | ErrorAction<any>

const handlers = new Map<string, (arg: any) => HandlerReturnValue>([
  [channels.forecastError, forecastError],
  [channels.forecastResponse, forecastResponse],
  [channels.routePush, push],
  [channels.configError, configError],
  [channels.configResponse, configResponse],
  [channels.weatherAlertsError, weatherAlertsError],
  [channels.weatherAlertsResponse, weatherAlertsResponse],
])

const listeners = []

export const electronMiddleware = ({ dispatch }) => next => action => {
  if (!listeners.length) {
    // Wire up channels to actions
    handlers.forEach((actionHandler, channel) => {
      listeners.push(
        ipcRenderer.on(channel, (event, arg) => dispatch(actionHandler(arg)))
      )
    })
  }

  return next(action)
}
