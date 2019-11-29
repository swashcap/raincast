import React from 'react'
import { Box } from 'grommet'
import { connect } from 'react-redux'

import { Navigation } from '../../../shared/components/Navigation'
import { Dispatch } from 'redux'
import { RouterState } from 'connected-react-router'
import { QRImageLink } from './QRImageLink'

export interface AppOwnProps {
  config: any
  children?: React.ReactNode
}

export interface AppStateProps {
  dispatch: Dispatch
  router: RouterState
}

export const App = connect(({ router }: any) => ({ router }))(
  ({ children, config, dispatch, router }: AppOwnProps & AppStateProps) => (
    <Box fill justify="stretch">
      <main>{children}</main>
      <Navigation
        dispatch={dispatch}
        router={router}
        routes={config.routes}
        style={{
          bottom: 0,
          left: 0,
          position: 'fixed',
          width: '100%',
        }}
      >
        <QRImageLink address={config.address} />
      </Navigation>
    </Box>
  )
)
