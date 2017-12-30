const { ipcRenderer } = require('electron')
const { push } = require('react-router-redux')

const electronMiddleware = ({ dispatch, getState }) => next => action => {
  return next(action)
}

module.exports = electronMiddleware
