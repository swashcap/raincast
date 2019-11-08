import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Grommet } from 'grommet'
import { Provider } from 'react-redux'
import { History } from 'history'
import { Store } from 'redux'

import { theme } from '../theme'

export interface RootProps {
  children: React.ReactNode
  history: History
  store: Store
}

export class Root extends React.Component<RootProps> {
  render () {
    const { children, history, store } = this.props

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Grommet full theme={theme}>
            {children}
          </Grommet>
        </ConnectedRouter>
      </Provider>
    )
  }
}

