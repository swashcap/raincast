const { applyMiddleware, createStore } = require('redux')
const { routerMiddleware } = require('connected-react-router')
const logger = require('redux-logger').default
const thunk = require('redux-thunk').default

const electronMiddleware = require('../middleware/electron.js')
const createRootReducer = require('../reducers/index.js')

const configureStore = (history, preloadedState) => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    applyMiddleware(routerMiddleware(history), thunk, electronMiddleware, logger)
  )

  if (module.hot) {
    module.hot.accept('../reducers/index.js', () => {
      store.replaceReducer(require('../reducers/index.js'))
    })
  }

  return store
}

module.exports = configureStore
