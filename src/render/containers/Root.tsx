import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { History } from 'history'
import { Store } from 'redux'

import { App } from '../components/App'
import { Cameras } from '../components/Cameras'
import { Home } from '../components/Home'
import { Root as SharedRoot } from '../../shared/containers/Root'
import { fetchConfig } from '../actions/config'

export interface RootOwnProps {
  history: History
  store: Store
}

export interface RootStateProps {
  config: any
}

export interface RootDispatchProps {
  fetchConfig: () => any
}

class _Root extends React.Component<RootOwnProps & RootStateProps & RootDispatchProps> {
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

export const Root = connect<RootStateProps, RootDispatchProps, RootOwnProps, any>(
  ({ config }) => ({ config }),
  {
    fetchConfig
  }
)(_Root)
