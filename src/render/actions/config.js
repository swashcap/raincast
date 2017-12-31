const { ipcRenderer } = require('electron')

const { configServerAddress } = require('../../shared/channels.js')

const CONFIG_GET_SERVER_ADDRESS = 'CONFIG_GET_SERVER_ADDRESS'

const getServerAddress = () => ({
  action: CONFIG_GET_SERVER_ADDRESS,
  payload: null
})

const CONFIG_SET_SERVER_ADDRESS = 'CONFIG_SET_SERVER_ADDRESS'

const setServerAddress = (serverAddress) => ({
  action: CONFIG_SET_SERVER_ADDRESS,
  payload: serverAddress
})

const fetchServerAddress = () => (dispatch) => {
  dispatch(getServerAddress())

  ipcRenderer.once(
    configServerAddress,
    (address) => dispatch(setServerAddress(address))
  )
  ipcRenderer.send(configServerAddress)
}

module.exports = {
  CONFIG_GET_SERVER_ADDRESS,
  CONFIG_SET_SERVER_ADDRESS,
  fetchServerAddress
}
