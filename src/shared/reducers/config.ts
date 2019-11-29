import { Reducer } from 'redux'

import { ConfigAction, actions } from '../actions/config'

export interface ConfigState {
  error: null
  isLoading: boolean
  orientation: 'horizontal'
  routes: Array<{
    href: string
    icon: string
    label: string
  }>
  serverAddress: string | null
  theme: 'dark'
}

export const config: Reducer<ConfigState, ConfigAction> = (
  state = {
    error: null,
    isLoading: false,
    orientation: 'horizontal',
    routes: [
      {
        href: '/',
        icon: 'Home',
        label: 'Home',
      },
      {
        href: '/cameras',
        icon: 'Camera',
        label: 'Cameras',
      },
    ],
    serverAddress: null,
    theme: 'dark',
  },
  { payload, type }
) => {
  switch (type) {
    case actions.CONFIG_ERROR:
      return Object.assign({}, state, {
        error: payload,
        isLoading: false,
      })
    case actions.CONFIG_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      })
    case actions.CONFIG_RESPONSE:
      return Object.assign({}, state, {
        isLoading: false,
        serverAddress: payload,
      })
    default:
      return state
  }
}
