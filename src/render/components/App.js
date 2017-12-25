/* global API_URL */
const React = require('react')
const PropTypes = require('prop-types')
const { NavLink, withRouter } = require('react-router-dom')

require('./App.css')

const App = ({ children }) => (
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
      <img alt='Admin QR code' src={`${API_URL}/qr-code.png`} />
    </header>
    <main className='App-content'>
      {children}
    </main>
  </div>
)

App.propTypes = {
  children: PropTypes.node
}

module.exports = withRouter(App)
