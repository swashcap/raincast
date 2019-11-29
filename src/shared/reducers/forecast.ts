import { Reducer } from 'redux'

import { ForecastActions, actions } from '../actions/forecast'

export interface ForecastState {
  data: any
  error: Error | null
  isLoading: boolean
  lastFetched: Date | null
}

export const forecast: Reducer<ForecastState, ForecastActions> = (
  state = {
    data: {},
    error: null,
    isLoading: false,
    lastFetched: null,
  },
  { payload, type }
) => {
  switch (type) {
    case actions.FORECAST_ERROR:
      return Object.assign({}, state, {
        error: payload,
        isLoading: false,
      })
    case actions.FORECAST_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      })
    case actions.FORECAST_RESPONSE:
      return Object.assign({}, state, {
        data: payload,
        isLoading: false,
        lastFetched: Date.now(),
      })
    default:
      return state
  }
}
