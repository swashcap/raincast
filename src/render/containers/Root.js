const React = require('react')
const PropTypes = require('prop-types')
const { ConnectedRouter } = require('connected-react-router')
const { Route, Switch } = require('react-router-dom')
const { Provider, connect } = require('react-redux')

const Admin = require('../components/Admin.js')
const App = require('../components/App.js')
const Cameras = require('../components/Cameras.js')
const Home = require('../components/Home.js')
const { fetchConfig } = require('../actions/config.js')

class Root extends React.Component {
  componentWillMount () {
    this.props.fetchConfig()
  }

  render () {
    const { config, history, store } = this.props

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
            <App config={config}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/cameras' component={Cameras} />
                <Route path='/admin' component={Admin} />
              </Switch>
            </App>
        </ConnectedRouter>
      </Provider>
    )
  }
}

Root.propTypes = {
  config: PropTypes.object.isRequired,
  fetchConfig: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

module.exports = connect(
  ({ config }) => ({ config }),
  {
    fetchConfig
  }
)(Root)
