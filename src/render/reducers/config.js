const { CONFIG_SET_SERVER_ADDRESS } = require('../actions/config.js')

const reducer = (
  state = {
    // TODO: Don't hard-code color
    color: '#ff0000',
    serverAddress: null
  },
  { payload, type }
) => {
  if (type === CONFIG_SET_SERVER_ADDRESS) {
    return Object.assign({}, state, {
      serverAddress: payload
    })
  }

  return state
}

module.exports = reducer
