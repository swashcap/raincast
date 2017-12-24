const { app, BrowserWindow } = require('electron')
const electronDebug = require('electron-debug')
const electronWindowState = require('electron-window-state')
const path = require('path')
const url = require('url')

electronDebug({
  showDevTools: true
})

let win

const createWindow = () => {
  const { height, width, x, y } = electronWindowState({
    defaultHeight: 600,
    defaultWidth: 800
  })

  win = new BrowserWindow({
    height,
    width,
    x,
    y
  })

  win.loadURL('http://localhost:8080')

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
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
