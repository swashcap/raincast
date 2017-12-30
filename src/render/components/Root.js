const React = require('react')
const PropTypes = require('prop-types')
const { ConnectedRouter } = require('react-router-redux')
const { Route } = require('react-router-dom')
const { Provider } = require('react-redux')

const Admin = require('./Admin.js')
const App = require('./App.js')
const Cameras = require('./Cameras.js')
const Home = require('./Home.js')

const Root = ({ history, store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path='/' component={Home} />
        <Route path='/cameras' component={Cameras} />
        <Route path='/admin' component={Admin} />
      </App>
    </ConnectedRouter>
  </Provider>
)

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

module.exports = Root
