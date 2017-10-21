import { render } from 'inferno'
import { IndexRoute, Route, Router } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import Admin from './components/Admin'
import App from './components/App'
import Home from './components/Home'

const browserHistory = createBrowserHistory()

const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <IndexRoute component={Home} />
      <Route path='/admin' component={Admin} />
    </Route>
  </Router>
)

render(routes, document.getElementById('app'))
