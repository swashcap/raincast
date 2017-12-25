const { combineReducers } = require('redux')

const alerts = require('./alerts.js')
const weather = require('./weather.js')

const rootReducer = combineReducers({
  alerts,
  weather
})

module.exports = rootReducer
