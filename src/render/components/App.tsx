import React from 'react'
import { Box } from 'grommet'
import { connect } from 'react-redux'

import { Navigation } from './Navigation'
import { Dispatch } from 'redux'
import { RouterState } from 'connected-react-router'

export interface AppOwnProps {
  config: any
  children?: React.ReactNode
}

export interface AppStateProps {
  dispatch: Dispatch
  router: RouterState
}

const _App: React.FC<AppOwnProps & AppStateProps> = ({
  children,
  config,
  dispatch,
  router,
}) => (
  <Box fill justify="stretch">
    <main>{children}</main>
    <Navigation
      config={config}
      dispatch={dispatch}
      router={router}
      style={{
        bottom: 0,
        left: 0,
        position: 'fixed',
        width: '100%',
      }}
    />
  </Box>
)

export const App = connect(({ router }: any) => ({ router }))(_App)
