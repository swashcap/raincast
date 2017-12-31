const { CONFIG_SET_SERVER_ADDRESS } = require('../actions/config.js')

const reducer = (
  state = {
    serverAddress: null
  },
  { action, payload }
) => {
  if (action === CONFIG_SET_SERVER_ADDRESS) {
    return {
      serverAddress: payload
    }
  }

  return state
}

module.exports = reducer
