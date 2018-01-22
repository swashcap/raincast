const { ipcRenderer } = require('electron')

const channels = require('../../shared/channels.js')

const FORECAST_ERROR = 'FORECAST_ERROR'
const FORECAST_REQUEST = 'FORECAST_REQUEST'
const FORECAST_RESPONSE = 'FORECAST_RESPONSE'

const forecastError = error => ({
  payload: error,
  type: FORECAST_ERROR
})

const forecastRequest = () => ({
  payload: null,
  type: FORECAST_REQUEST
})

const forecastResponse = data => ({
  payload: data,
  type: FORECAST_RESPONSE
})

const fetchForecast = () => (dispatch) => {
  dispatch(forecastRequest())
  ipcRenderer.send(channels.forecastRequest)
}

module.exports = {
  FORECAST_ERROR,
  FORECAST_REQUEST,
  FORECAST_RESPONSE,
  fetchForecast,
  forecastError,
  forecastRequest,
  forecastResponse
}
