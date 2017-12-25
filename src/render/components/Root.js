const React = require('react')
const PropTypes = require('prop-types')
const { Route } = require('react-router-dom')
const { Provider } = require('react-redux')

const Admin = require('./Admin.js')
const App = require('./App.js')
const Cameras = require('./Cameras.js')
const Home = require('./Home.js')

require('../styles/main.css')

const Root = ({ store }) => (
  <Provider store={store}>
    <App>
      <Route exact path='/' component={Home} />
      <Route path='/cameras' component={Cameras} />
      <Route path='/admin' component={Admin} />
    </App>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

module.exports = Root
