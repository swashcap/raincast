const {
  ALERTS_REQUEST_END,
  ALERTS_REQUEST_ERROR,
  ALERTS_REQUEST_START
} = require('../actions/alerts.js')

const reducer = (
  state = {
    data: [],
    error: null,
    isLoading: false,
    lastFetched: null
  },
  { action, payload }
) => {
  switch (action) {
    case ALERTS_REQUEST_END:
      return Object.assign({}, state, {
        data: payload,
        isLoading: false,
        lastFetched: Date.now()
      })
    case ALERTS_REQUEST_ERROR:
      return Object.assign({}, state, {
        error: payload,
        isLoading: false
      })
    case ALERTS_REQUEST_START:
      return Object.assign({}, state, { isLoading: true })
    default:
      return state
  }
}

module.exports = reducer
