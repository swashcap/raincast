const { combineReducers } = require('redux')
const { routerReducer } = require('react-router-redux')

const alerts = require('./alerts.js')
const weather = require('./weather.js')

const rootReducer = combineReducers({
  alerts,
  router: routerReducer,
  weather
})

module.exports = rootReducer
