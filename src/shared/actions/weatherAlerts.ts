import { Action, ErrorAction } from '../types'

export enum actions {
  WEATHER_ALERTS_ERROR = 'WEATHER_ALERTS_ERROR',
  WEATHER_ALERTS_REQUEST = 'WEATHER_ALERTS_REQUEST',
  WEATHER_ALERTS_RESPONSE = 'WEATHER_ALERTS_RESPONSE',
}

export const weatherAlertsError = (
  error: Error
): ErrorAction<actions.WEATHER_ALERTS_ERROR> => ({
  error: true,
  payload: error,
  type: actions.WEATHER_ALERTS_ERROR,
})

export const weatherAlertsRequest = (): Action<actions.WEATHER_ALERTS_REQUEST> => ({
  payload: null,
  type: actions.WEATHER_ALERTS_REQUEST,
})

export const weatherAlertsResponse = (
  data: any
): Action<actions.WEATHER_ALERTS_RESPONSE> => ({
  payload: data,
  type: actions.WEATHER_ALERTS_RESPONSE,
})

export type WeatherAlertsActions =
  | ReturnType<typeof weatherAlertsError>
  | ReturnType<typeof weatherAlertsRequest>
  | ReturnType<typeof weatherAlertsResponse>
