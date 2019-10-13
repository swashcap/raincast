const config = require('./config.js')
const forecast = require('./forecast.js')
const weatherAlerts = require('./weather-alerts.js')

const rootReducer = {
  config,
  forecast,
  weatherAlerts
}

module.exports = rootReducer
