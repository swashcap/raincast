import { h, Component } from 'preact' // eslint-disable-line no-unused-vars
import { Link, Router } from 'preact-router'
import createHashHistory from 'history/createHashHistory'

import Admin from './Admin'
import Home from './Home'

export default class App extends Component {
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
          <Router history={createHashHistory()}>
            <Home path='/' />
            <Admin path='/admin' />
          </Router>
        </main>
      </div>
    )
  }
}
