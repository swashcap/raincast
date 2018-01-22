const { combineReducers } = require('redux')
const { routerReducer } = require('react-router-redux')

const config = require('./config.js')
const forecast = require('./forecast.js')
const weatherAlerts = require('./weather-alerts.js')

const rootReducer = combineReducers({
  config,
  forecast,
  router: routerReducer,
  weatherAlerts
})

module.exports = rootReducer
