import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { History } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { applyMiddleware, createStore } from 'redux'

export const configureStore = (history: History) => {
  const router = connectRouter(history)
  const store = createStore(
    router,
    applyMiddleware(routerMiddleware(history), thunk, logger)
  )

  return store
}
