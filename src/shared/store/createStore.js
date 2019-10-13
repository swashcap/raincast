const logger = require('redux-logger').default
const { applyMiddleware, combineReducers, createStore: reduxCreateStore } = require('redux')
const { connectRouter, routerMiddleware } = require('connected-react-router')

const createStore = (history, reducers = null, pathToReducers = undefined, middleware = []) => {
  const store = reduxCreateStore(
    combineReducers({
      ...reducers,
      router: connectRouter(history)
    }),
    applyMiddleware(routerMiddleware(history), ...middleware, logger)
  )

  if (module.hot && pathToReducers) {
    module.hot.accept(pathToReducers, () => {
      store.replaceReducer(require(pathToReducers)(history))
    })
  }

  return store
}

module.exports = createStore
