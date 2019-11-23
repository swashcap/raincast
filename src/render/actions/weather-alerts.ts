import { ipcRenderer } from 'electron'

import * as channels from '../../shared/channels'

export const WEATHER_ALERTS_ERROR = 'WEATHER_ALERTS_ERROR'

export const weatherAlertsError = error => ({
  payload: error,
  type: WEATHER_ALERTS_ERROR,
})

export const WEATHER_ALERTS_REQUEST = 'WEATHER_ALERTS_REQUEST'

export const weatherAlertsRequest = () => ({
  payload: null,
  type: WEATHER_ALERTS_REQUEST,
})

export const WEATHER_ALERTS_RESPONSE = 'WEATHER_ALERTS_RESPONSE'

export const weatherAlertsResponse = data => ({
  payload: data,
  type: WEATHER_ALERTS_RESPONSE,
})

export const fetchWeatherAlerts = () => dispatch => {
  dispatch(weatherAlertsRequest)
  ipcRenderer.send(channels.weatherAlertsRequest)
}
