/**
 * Response handlers for renderer IPC requests.
 *
 * {@link https://electronjs.org/docs/api/ipc-main}
 */
const ip = require('ip')
const { ipcMain } = require('electron')

const { configServerAddress } = require('../../shared/channels.js')
const getPort = require('../utils/get-port.js')

const handleConfigServerAddress = event => getPort()
  .then((port) => {
    event.sender.send(configServerAddress, `http://${ip.address()}:${port}`)
  })
  .catch(console.error)

module.exports = {
  off () {
    ipcMain.removeAllListeners(configServerAddress)
  },
  on () {
    ipcMain.on(configServerAddress, handleConfigServerAddress)
  }
}
