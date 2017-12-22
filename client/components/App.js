/* global API_URL */
import preact, { Component } from 'preact' // eslint-disable-line no-unused-vars
import { Router } from 'preact-router'
import { Link } from 'preact-router/match'
import createHashHistory from 'history/createHashHistory'

import Admin from './Admin'
import Home from './Home'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-nav' role='banner'>
          <nav role='navigation'>
            <Link
              activeClassName='active'
              href='/'
            >
              Home
            </Link>
            <Link
              activeClassName='active'
              href='/admin'
            >
              Admin
            </Link>
          </nav>
          <img alt='Admin QR code' src={`${API_URL}/qr-code.png`} />
        </header>
        <main className='App-content'>
          <Router history={createHashHistory()}>
            <Home path='/' />
            <Admin path='/admin' />
          </Router>
        </main>
      </div>
    )
  }
}
