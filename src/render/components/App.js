/* global API_URL */
const React = require('react') // eslint-disable-line no-unused-vars
const { NavLink, BrowserRouter, Route } = require('react-router-dom')

const Admin = require('./Admin')
const Cameras = require('./Cameras')
const Home = require('./Home')

require('./App.css')

const App = () => (
  <BrowserRouter>
    <div className='App'>
      <header className='App-nav' role='banner'>
        <nav role='navigation'>
          <NavLink
            activeClassName='active'
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
        <Route exact path='/' component={Home} />
        <Route path='/cameras' component={Cameras} />
        <Route path='/admin' component={Admin} />
      </main>
    </div>
  </BrowserRouter>
)

module.exports = App
