import logger from 'redux-logger'
import { applyMiddleware, combineReducers, createStore as reduxCreateStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'

export const createStore = (history, reducers = null, pathToReducers = undefined, middleware = []) => {
  const router = connectRouter(history)
  const store = reduxCreateStore(
    combineReducers({
      ...reducers,
      router
    }),
    applyMiddleware(routerMiddleware(history), ...middleware, logger)
  )

  if (module.hot && pathToReducers) {
    module.hot.accept(pathToReducers, () => {
      store.replaceReducer(combineReducers({
        ...require(pathToReducers).default,
        router
      }))
    })
  }

  return store
}
