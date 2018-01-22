const { ipcRenderer } = require('electron')
const { push } = require('react-router-redux')

const { forecastError, forecastResponse } = require('../actions/forecast.js')
const { configError, configResponse } = require('../actions/config.js')
const {
  weatherAlertsError,
  weatherAlertsResponse
} = require('../actions/weather-alerts.js')

const channels = require('../../shared/channels.js')

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

const electronMiddleware = ({ dispatch }) => next => action => {
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

module.exports = electronMiddleware
