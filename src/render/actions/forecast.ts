import { ipcRenderer } from 'electron'

import * as channels from '../../shared/channels'

export const FORECAST_ERROR = 'FORECAST_ERROR'
export const FORECAST_REQUEST = 'FORECAST_REQUEST'
export const FORECAST_RESPONSE = 'FORECAST_RESPONSE'

export const forecastError = error => ({
  payload: error,
  type: FORECAST_ERROR
})

export const forecastRequest = () => ({
  payload: null,
  type: FORECAST_REQUEST
})

export const forecastResponse = data => ({
  payload: data,
  type: FORECAST_RESPONSE
})

export const fetchForecast = () => (dispatch) => {
  dispatch(forecastRequest())
  ipcRenderer.send(channels.forecastRequest)
}
