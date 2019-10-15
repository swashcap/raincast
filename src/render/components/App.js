import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Navigation } from './Navigation'
import { QRImage } from './QRImage'

const _App = ({ children, config, dispatch, router }) => (
  <div className='App'>
    <header className='App-nav' role='banner'>
      <Navigation dispatch={dispatch} router={router} />
      <QRImage
        address={config.serverAddress}
        color={config.color}
      />
    </header>
    <main className='App-content'>
      {children}
    </main>
  </div>
)

_App.propTypes = {
  children: PropTypes.node,
  config: PropTypes.shape({
    color: PropTypes.string,
    serverAddress: PropTypes.string
  }).isRequired
}

export const App = connect(({ router }) => ({ router }))(_App)
