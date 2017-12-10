const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')
const debug = require('debug')
const koaStatic = require('koa-static')
const logger = require('koa-logger')
const path = require('path')

const { registerRoutes } = require('./routes.js')

const app = new Koa()

app.context.darkskyApiKey = process.env.API_KEY
app.context.debug = debug('raincast:server')
app.context.serverPort = process.env.PORT || 3000

app.use(bodyParser())
app.use(cors())

if (process.env.NODE_ENV !== 'test') {
  app.use(logger())
}

app.use(koaStatic(path.join(__dirname, '..', 'dist')))

registerRoutes(app)

if (!module.parent) {
  app.listen(app.context.serverPort)
  console.log(`raincast listening on ${app.context.serverPort}`)
}

module.exports = app
