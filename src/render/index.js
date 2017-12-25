const React = require('react')
const { HashRouter } = require('react-router-dom')
const { render } = require('react-dom')

const Root = require('./components/Root.js')
const configureStore = require('./store/configureStore.js')

const store = configureStore()

render(
  <HashRouter>
    <Root store={store} />
  </HashRouter>,
  document.getElementById('app')
)
