import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { App } from '../components/App'
import { Cameras } from '../components/Cameras'
import { Home } from '../components/Home'
import { Root as SharedRoot } from '../../shared/containers/Root'
import { fetchConfig } from '../actions/config'

class _Root extends React.Component {
  componentWillMount () {
    this.props.fetchConfig()
  }

  render () {
    const { config, history, store } = this.props

    return (
      <SharedRoot history={history} store={store}>
        <App config={config}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cameras' component={Cameras} />
          </Switch>
        </App>
      </SharedRoot>
    )
  }
}

_Root.propTypes = {
  config: PropTypes.object.isRequired,
  fetchConfig: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export const Root = connect(
  ({ config }) => ({ config }),
  {
    fetchConfig
  }
)(_Root)
