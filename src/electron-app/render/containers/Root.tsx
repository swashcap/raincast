import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { History } from 'history'
import { Store, Dispatch } from 'redux'

import { App } from '../components/App'
import { Cameras } from '../components/Cameras'
import { Home } from '../components/Home'
import { Root as SharedRoot } from '../../../shared/components/Root'
import { ElectronRenderState } from '../configureStore'
import { configRequest } from '../../../shared/actions/config'

export interface RootOwnProps {
  history: History
  store: Store
}

export interface RootStateProps {
  config: any
}

export interface RootDispatchProps {
  dispatch: Dispatch
}

export const Root = connect(({ config }: ElectronRenderState) => ({ config }))(
  class extends React.Component<
    RootOwnProps & RootStateProps & RootDispatchProps
  > {
    componentWillMount() {
      this.props.dispatch(configRequest())
    }

    render() {
      const { config, history, store } = this.props

      return (
        <SharedRoot history={history} store={store}>
          <App config={config}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cameras" component={Cameras} />
            </Switch>
          </App>
        </SharedRoot>
      )
    }
  }
)
