const { applyMiddleware, createStore } = require('redux')
const logger = require('redux-logger').default
const thunk = require('redux-thunk').default

const electronMiddleware = require('../middleware/electron.js')
const routerMiddleware = require('../middleware/router.js')
const rootReducer = require('../reducers/index.js')

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, electronMiddleware, routerMiddleware, logger)
  )

  if (module.hot) {
    module.hot.accept('../reducers/index.js', () => {
      store.replaceReducer(require('../reducers/index.js'))
    })
  }

  return store
}

module.exports = configureStore
