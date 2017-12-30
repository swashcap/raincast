const React = require('react')
const { render } = require('react-dom')

const Root = require('./components/Root.js')
const configureStore = require('./store/configureStore.js')
const { history } = require('./middleware/router.js')

require('../shared/styles/main.css')

const store = configureStore()

render(
  <Root history={history} store={store} />,
  document.getElementById('app')
)
