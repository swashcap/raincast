import { Reducer } from 'redux'

import {
  FORECAST_ERROR,
  FORECAST_REQUEST,
  FORECAST_RESPONSE,
} from '../actions/forecast'

export interface ForecastState {
  data: any
  error: Error | null
  isLoading: boolean
  lastFetched: Date | null
}

export const forecast: Reducer<ForecastState> = (
  state = {
    data: {},
    error: null,
    isLoading: false,
    lastFetched: null,
  },
  { payload, type }
) => {
  switch (type) {
    case FORECAST_ERROR:
      return Object.assign({}, state, {
        error: payload,
        isLoading: false,
      })
    case FORECAST_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      })
    case FORECAST_RESPONSE:
      return Object.assign({}, state, {
        data: payload,
        isLoading: false,
        lastFetched: Date.now(),
      })
    default:
      return state
  }
}
