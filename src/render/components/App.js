import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import { connect } from 'react-redux'

import { Navigation } from './Navigation'

const _App = ({ children, config, dispatch, router }) => (
  <Box fill justify='stretch'>
    <main>
      {children}
    </main>
    <Navigation
      config={config}
      dispatch={dispatch}
      router={router}
      style={{
        bottom: 0,
        left: 0,
        position: 'fixed',
        width: '100%'
      }}
    />
  </Box>
)

_App.propTypes = {
  children: PropTypes.node,
  config: PropTypes.shape({
    color: PropTypes.string,
    serverAddress: PropTypes.string
  }).isRequired
}

export const App = connect(({ router }) => ({ router }))(_App)
