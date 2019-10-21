import PropTypes from 'prop-types'
import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Grommet } from 'grommet'
import { Provider } from 'react-redux'

import { theme } from '../theme'

export class Root extends React.Component {
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

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}
