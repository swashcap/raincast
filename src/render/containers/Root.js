const React = require('react')
const PropTypes = require('prop-types')
const { ConnectedRouter } = require('react-router-redux')
const { Route } = require('react-router-dom')
const { Provider, connect } = require('react-redux')

const Admin = require('../components/Admin.js')
const App = require('../components/App.js')
const Cameras = require('../components/Cameras.js')
const Home = require('../components/Home.js')
const { fetchServerAddress } = require('../actions/config.js')

class Root extends React.Component {
  componentWillMount () {
    this.props.fetchServerAddress()
  }

  render () {
    const { config, history, store } = this.props

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App config={config}>
            <Route exact path='/' component={Home} />
            <Route path='/cameras' component={Cameras} />
            <Route path='/admin' component={Admin} />
          </App>
        </ConnectedRouter>
      </Provider>
    )
  }
}

Root.propTypes = {
  config: PropTypes.object.isRequired,
  fetchServerAddress: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

module.exports = connect(
  ({ config }) => ({ config }),
  {
    fetchServerAddress
  }
)(Root)
