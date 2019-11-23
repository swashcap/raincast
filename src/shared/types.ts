export type UnwrapReactFC<T> = T extends React.FunctionComponent<infer U>
  ? U
  : never
