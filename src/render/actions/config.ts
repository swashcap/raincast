import { ipcRenderer } from 'electron'

import * as channels from '../../shared/channels'

export const CONFIG_ERROR = 'CONFIG_ERROR'

export const configError = error => ({
  payload: error,
  type: CONFIG_ERROR
})

export const CONFIG_REQUEST = 'CONFIG_REQUEST'

export const configRequest = () => ({
  payload: null,
  type: CONFIG_REQUEST
})

export const CONFIG_RESPONSE = 'CONFIG_RESPONSE'

export const configResponse = data => ({
  payload: data,
  type: CONFIG_RESPONSE
})

export const fetchConfig = () => (dispatch) => {
  dispatch(configRequest())
  ipcRenderer.send(channels.serverConfigRequest)
}
