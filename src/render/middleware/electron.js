const { ipcRenderer } = require('electron')
const { push } = require('react-router-redux')

const { routePush } = require('../../shared/channels.js')

let listeners

const electronMiddleware = ({ dispatch, getState }) => next => action => {
  if (!listeners) {
    listeners = ipcRenderer.on(routePush, (newRoute) => {
      dispatch(push(newRoute))
    })
  }

  return next(action)
}

module.exports = electronMiddleware
