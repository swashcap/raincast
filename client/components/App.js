import { h, Component } from 'preact' // eslint-disable-line no-unused-vars
import { Link, Router } from 'preact-router'

import Admin from './Admin'
import Home from './Home'

export default class App extends Component {
  handleRoute (event) {
    this.currentUrl = event.url
  }

  render () {
    return (
      <div className='app'>
        <header role='banner'>
          <nav role='navigation'>
            <Link href='/'>Home</Link>
            <Link href='/admin'>Admin</Link>
          </nav>
        </header>
        <main>
          <Router onChange={event => this.handleRoute(event)}>
            <Home path='/' />
            <Admin path='/admin' />
          </Router>
        </main>
      </div>
    )
  }
}
