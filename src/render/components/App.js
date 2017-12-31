const React = require('react')
const PropTypes = require('prop-types')
const { NavLink, withRouter } = require('react-router-dom')

const QRImage = require('./QRImage.js')
require('./App.css')

const App = ({ children, config }) => (
  <div className='App'>
    <header className='App-nav' role='banner'>
      <nav role='navigation'>
        <NavLink
          activeClassName='active'
          exact
          to='/'
      >
        Home
      </NavLink>
        <NavLink
          activeClassName='active'
          to='/cameras'
      >
        Cameras
      </NavLink>
        <NavLink
          activeClassName='active'
          to='/admin'
      >
        Admin
      </NavLink>
      </nav>
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

App.propTypes = {
  children: PropTypes.node,
  config: PropTypes.shape({
    color: PropTypes.string,
    serverAddress: PropTypes.string
  }).isRequired
}

module.exports = withRouter(App)
