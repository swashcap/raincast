const { combineReducers } = require('redux')
const { routerReducer } = require('react-router-redux')

const alerts = require('./alerts.js')
const config = require('./config.js')
const weather = require('./weather.js')

const rootReducer = combineReducers({
  alerts,
  config,
  router: routerReducer,
  weather
})

module.exports = rootReducer
