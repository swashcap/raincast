const { combineReducers } = require('redux')
const { connectRouter } = require('connected-react-router')

const config = require('./config.js')
const forecast = require('./forecast.js')
const weatherAlerts = require('./weather-alerts.js')

const rootReducer = (history) => combineReducers({
  config,
  forecast,
  router: connectRouter(history),
  weatherAlerts
})

module.exports = rootReducer
