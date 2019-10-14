const React = require('react')
const { createHashHistory } = require('history')
const { render } = require('react-dom')

const Root = require('./containers/Root.js')
const configureStore = require('./store/configureStore.js')

const history = createHashHistory()
const store = configureStore(history)

render(
  <Root history={history} store={store} />,
  document.getElementById('app')
)
