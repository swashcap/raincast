import { Action, ErrorAction } from '../types'

export enum actions {
  FORECAST_ERROR = 'FORECAST_ERROR',
  FORECAST_REQUEST = 'FORECAST_REQUEST',
  FORECAST_RESPONSE = 'FORECAST_RESPONSE',
}

export const forecastError = (
  error: Error
): ErrorAction<actions.FORECAST_ERROR> => ({
  error: true,
  payload: error,
  type: actions.FORECAST_ERROR,
})

export const forecastRequest = (): Action<actions.FORECAST_REQUEST> => ({
  payload: null,
  type: actions.FORECAST_REQUEST,
})

export const forecastResponse = (
  data: any
): Action<actions.FORECAST_RESPONSE> => ({
  payload: data,
  type: actions.FORECAST_RESPONSE,
})

export type ForecastActions =
  | ReturnType<typeof forecastError>
  | ReturnType<typeof forecastRequest>
  | ReturnType<typeof forecastResponse>
