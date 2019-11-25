import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { History } from 'history'
import {
  connectRouter,
  routerMiddleware,
  RouterState,
} from 'connected-react-router'

import reducers from './reducers'
import { electronMiddleware } from './middleware/electron'
import { UnwrapState } from '../../shared/types'

export type ElectronRenderState = UnwrapState<ReturnType<typeof configureStore>>

export const configureStore = (history: History) => {
  const router = connectRouter(history)
  const store = createStore(
    combineReducers({
      ...reducers,
      router,
    }),
    applyMiddleware(
      routerMiddleware(history),
      electronMiddleware,
      thunk,
      logger
    )
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(
        combineReducers({
          ...require('./reducers').default,
          router,
        })
      )
    })
  }

  return store
}
