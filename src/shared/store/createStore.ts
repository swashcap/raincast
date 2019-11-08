import logger from 'redux-logger'
import { Action, Middleware, ReducersMapObject, applyMiddleware, combineReducers, createStore as reduxCreateStore } from 'redux'
import { History } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

export const createStore = <S, A extends Action, R extends ReducersMapObject, M extends Middleware[]>(
  history: History,
  reducers?: R,
  pathToReducers?: string,
  middleware?: M,
) => {
  const router = connectRouter(history)
  const store = reduxCreateStore<S, A, any, any>(
    combineReducers<S, A>({
      ...reducers,
      router
    }),
    applyMiddleware<any, S>(routerMiddleware(history), ...middleware, logger)
  )

  if (module.hot && pathToReducers) {
    module.hot.accept(pathToReducers, () => {
      store.replaceReducer(combineReducers({
        // @ts-ignore
        ...require(pathToReducers).default,
        router
      }))
    })
  }

  return store
}
