import { Action as ReduxAction, Store } from 'redux'

export type Action<T = any, P = any> = ReduxAction<T> & {
  payload: P
}

export type ErrorAction<T> = ReduxAction<T> & {
  error: true
  payload: Error
}

export type UnwrapReactFC<T> = T extends React.FunctionComponent<infer U>
  ? U
  : never

export type UnwrapState<T> = T extends Store<infer S> ? S : never
