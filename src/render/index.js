/* global requestAnimationFrame */
import preact, { render } from 'preact' // eslint-disable-line no-unused-vars

import './styles/main.css'

let root

const init = () => {
  const App = require('./components/App').default
  root = render(<App />, document.getElementById('app'), root)
}

if (module.hot) {
  module.hot.accept('./components/App', () => requestAnimationFrame(init))
}

init()
