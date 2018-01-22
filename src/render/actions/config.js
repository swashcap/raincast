const { ipcRenderer } = require('electron')

const channels = require('../../shared/channels.js')

const CONFIG_ERROR = 'CONFIG_ERROR'

const configError = error => ({
  payload: error,
  type: CONFIG_ERROR
})

const CONFIG_REQUEST = 'CONFIG_REQUEST'

const configRequest = () => ({
  payload: null,
  type: CONFIG_REQUEST
})

const CONFIG_RESPONSE = 'CONFIG_RESPONSE'

const configResponse = data => ({
  payload: data,
  type: CONFIG_RESPONSE
})

const fetchConfig = () => (dispatch) => {
  dispatch(configRequest())
  ipcRenderer.send(channels.serverConfigRequest)
}

module.exports = {
  CONFIG_ERROR,
  CONFIG_REQUEST,
  CONFIG_RESPONSE,
  configError,
  configRequest,
  configResponse,
  fetchConfig
}
