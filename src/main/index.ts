import { app, BrowserWindow }  from 'electron'
import electronDebug  from 'electron-debug'
import electronIsDev  from 'electron-is-dev'
import electronWindowState  from 'electron-window-state'
import http  from 'http'
import os  from 'os'
import path  from 'path'
import url  from 'url'

import debug  from './utils/debug'
import getPort  from './utils/get-port'
import * as ipc  from './services/ipc'
import webApp  from './server/index'

electronDebug({
  showDevTools: true
})

let server
let win

const createWindow = () => {
  const { height, manage, width, x, y } = electronWindowState({
    defaultHeight: 600,
    defaultWidth: 800
  })

  win = new BrowserWindow({
    height,
    width,
    x,
    y,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (electronIsDev) {
    win.loadURL('http://localhost:8080')
    BrowserWindow.addDevToolsExtension(path.join(
      os.homedir(),
      'Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.2.0_0'
    ))
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, '..', 'client', 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
  }

  win.on('closed', () => {
    win = null
  })

  manage(win)
}

app.on('ready', () => {
  createWindow()

  ipc.on()

  getPort().then((port) => {
    server = http.createServer(webApp.callback()).listen(port)
    debug('server listening on port: %d', port)
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('will-quit', () => {
  ipc.off()

  if (server) {
    server.close()
  }
})
