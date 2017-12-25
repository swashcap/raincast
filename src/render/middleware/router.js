const { createHashHistory } = require('history')
const { routerMiddleware } = require('react-router-redux')

const history = createHashHistory()

const router = routerMiddleware(history)

module.exports = router
module.exports.history = history
