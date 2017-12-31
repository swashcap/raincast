/**
 * Response handlers for renderer IPC requests.
 *
 * {@link https://electronjs.org/docs/api/ipc-main}
 */
const ip = require('ip')
const { ipcMain } = require('electron')

const { configServerAddress } = require('../../shared/channels.js')
const debug = require('../utils/debug.js')
const getPort = require('../utils/get-port.js')

const handleConfigServerAddress = event => {
  debug('getting server address')

  return getPort()
    .then((port) => {
      const address = `http://${ip.address()}:${port}`
      debug('sending server address: %s', address)
      event.sender.send(configServerAddress, address)
    })
    .catch(console.error)
}

module.exports = {
  off () {
    ipcMain.removeAllListeners(configServerAddress)
  },
  on () {
    ipcMain.on(configServerAddress, handleConfigServerAddress)
  }
}
