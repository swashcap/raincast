import {
  CONFIG_ERROR,
  CONFIG_REQUEST,
  CONFIG_RESPONSE
} from '../actions/config'

export const config = (
  state = {
    // TODO: Don't hard-code color
    color: '#ff0000',
    error: null,
    isLoading: false,
    serverAddress: null
  },
  { payload, type }
) => {
  switch (type) {
    case CONFIG_ERROR:
      return Object.assign({}, state, {
        error: payload,
        isLoading: false
      })
    case CONFIG_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      })
    case CONFIG_RESPONSE:
      return Object.assign({}, state, {
        isLoading: false,
        serverAddress: payload
      })
    default:
      return state
  }
}
