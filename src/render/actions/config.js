const { ipcRenderer } = require('electron')

const { configServerAddress } = require('../../shared/channels.js')

const CONFIG_GET_SERVER_ADDRESS = 'CONFIG_GET_SERVER_ADDRESS'

const getServerAddress = () => ({
  payload: null,
  type: CONFIG_GET_SERVER_ADDRESS
})

const CONFIG_SET_SERVER_ADDRESS = 'CONFIG_SET_SERVER_ADDRESS'

const setServerAddress = (serverAddress) => ({
  payload: serverAddress,
  type: CONFIG_SET_SERVER_ADDRESS
})

const fetchServerAddress = () => (dispatch) => {
  dispatch(getServerAddress())

  ipcRenderer.once(
    configServerAddress,
    (event, arg) => dispatch(setServerAddress(arg))
  )
  ipcRenderer.send(configServerAddress)
}

module.exports = {
  CONFIG_GET_SERVER_ADDRESS,
  CONFIG_SET_SERVER_ADDRESS,
  fetchServerAddress
}
