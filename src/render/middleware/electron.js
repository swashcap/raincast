import { ipcRenderer } from 'electron'
import { push } from 'connected-react-router'

import { forecastError, forecastResponse } from '../actions/forecast'
import { configError, configResponse } from '../actions/config'

import channels from '../../shared/channels'

import {
  weatherAlertsError,
  weatherAlertsResponse
} from '../actions/weather-alerts.js'

const handlers = new Map([
  [channels.forecastError, forecastError],
  [channels.forecastResponse, forecastResponse],
  [channels.routePush, push],
  [channels.serverConfigError, configError],
  [channels.serverConfigResponse, configResponse],
  [channels.weatherAlertsError, weatherAlertsError],
  [channels.weatherAlertsResponse, weatherAlertsResponse]
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
