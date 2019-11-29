import { Reducer } from 'redux'

import { WeatherAlertsActions, actions } from '../actions/weatherAlerts'

export interface WeatherAlertsState {
  data: any[]
  error: Error | null
  isLoading: boolean
  lastFetched: Date | null
}

export const weatherAlerts: Reducer<
  WeatherAlertsState,
  WeatherAlertsActions
> = (
  state = {
    data: [],
    error: null,
    isLoading: false,
    lastFetched: null,
  },
  { payload, type }
) => {
  switch (type) {
    case actions.WEATHER_ALERTS_RESPONSE:
      return Object.assign({}, state, {
        data: payload,
        isLoading: false,
        lastFetched: Date.now(),
      })
    case actions.WEATHER_ALERTS_ERROR:
      return Object.assign({}, state, {
        error: payload,
        isLoading: false,
      })
    case actions.WEATHER_ALERTS_REQUEST:
      return Object.assign({}, state, { isLoading: true })
    default:
      return state
  }
}
