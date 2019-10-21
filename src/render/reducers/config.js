import {
  CONFIG_ERROR,
  CONFIG_REQUEST,
  CONFIG_RESPONSE
} from '../actions/config'

export const config = (
  state = {
    error: null,
    isLoading: false,
    orientation: 'horizontal',
    routes: [{
      href: '/',
      icon: 'Home',
      label: 'Home'
    }, {
      href: '/cameras',
      icon: 'Camera',
      label: 'Cameras'
    }],
    serverAddress: null,
    theme: 'dark'
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
