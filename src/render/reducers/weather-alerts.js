const {
  WEATHER_ALERTS_ERROR,
  WEATHER_ALERTS_REQUEST,
  WEATHER_ALERTS_RESPONSE
} = require('../actions/weather-alerts.js')

const reducer = (
  state = {
    data: [],
    error: null,
    isLoading: false,
    lastFetched: null
  },
  { payload, type }
) => {
  switch (type) {
    case WEATHER_ALERTS_RESPONSE:
      return Object.assign({}, state, {
        data: payload,
        isLoading: false,
        lastFetched: Date.now()
      })
    case WEATHER_ALERTS_ERROR:
      return Object.assign({}, state, {
        error: payload,
        isLoading: false
      })
    case WEATHER_ALERTS_REQUEST:
      return Object.assign({}, state, { isLoading: true })
    default:
      return state
  }
}

module.exports = reducer
