const thunk = require('redux-thunk').default

const electronMiddleware = require('../middleware/electron.js')
const createStore = require('../../shared/store/createStore')
const reducers = require('../reducers/index.js')

const configureStore = (history) => createStore(
  history,
  reducers,
  '../reducers/index.js',
  [thunk, electronMiddleware]
)

module.exports = configureStore
