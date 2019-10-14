const React = require('react')
const PropTypes = require('prop-types')
const { Route, Switch } = require('react-router-dom')
const { connect } = require('react-redux')

const Admin = require('../components/Admin.js')
const App = require('../components/App.js')
const Cameras = require('../components/Cameras.js')
const Home = require('../components/Home.js')
const SharedRoot = require('../../shared/containers/Root').default
const { fetchConfig } = require('../actions/config.js')

class Root extends React.Component {
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
            <Route path='/admin' component={Admin} />
          </Switch>
        </App>
      </SharedRoot>
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
