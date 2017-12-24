const React = require('react') // eslint-disable-line no-unused-vars
const { render } = require('react-dom')

const App = require('./components/App')

require('./styles/main.css')

render(<App />, document.getElementById('app'))
