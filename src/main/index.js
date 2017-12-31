const { app, BrowserWindow } = require('electron')
const electronDebug = require('electron-debug')
const electronIsDev = require('electron-is-dev')
const electronWindowState = require('electron-window-state')
const http = require('http')
const path = require('path')
const url = require('url')

const debug = require('./utils/debug.js')
const getPort = require('./utils/get-port.js')
const webApp = require('./server/index.js')

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
    y
  })

  if (electronIsDev) {
    win.loadURL('http://localhost:8080')
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
  if (server) {
    server.close()
  }
})
