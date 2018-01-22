const { ipcRenderer } = require('electron')

const channels = require('../../shared/channels.js')

const WEATHER_ALERTS_ERROR = 'WEATHER_ALERTS_ERROR'

const weatherAlertsError = error => ({
  payload: error,
  type: WEATHER_ALERTS_ERROR
})

const WEATHER_ALERTS_REQUEST = 'WEATHER_ALERTS_REQUEST'

const weatherAlertsRequest = () => ({
  payload: null,
  type: WEATHER_ALERTS_REQUEST
})

const WEATHER_ALERTS_RESPONSE = 'WEATHER_ALERTS_RESPONSE'

const weatherAlertsResponse = data => ({
  payload: data,
  type: WEATHER_ALERTS_RESPONSE
})

const fetchWeatherAlerts = () => (dispatch) => {
  dispatch(weatherAlertsRequest)
  ipcRenderer.send(channels.weatherAlertsRequest)
}

module.exports = {
  WEATHER_ALERTS_ERROR,
  WEATHER_ALERTS_REQUEST,
  WEATHER_ALERTS_RESPONSE,
  fetchWeatherAlerts,
  weatherAlertsError,
  weatherAlertsRequest,
  weatherAlertsResponse
}
