const React = require('react')
const { createBrowserHistory } = require('history')
const { render } = require('react-dom')

const Root = require('./containers/Root.js')
const configureStore = require('./store/configureStore.js')

require('../shared/styles/main.css')

const history = createBrowserHistory()
const store = configureStore(history)

render(
  <Root history={history} store={store} />,
  document.getElementById('app')
)
