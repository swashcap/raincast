import { Store } from 'redux'

export type UnwrapReactFC<T> = T extends React.FunctionComponent<infer U>
  ? U
  : never

export type UnwrapState<T> = T extends Store<infer S> ? S : never
