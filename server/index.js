const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const koaStatic = require('koa-static')
const path = require('path')

const { registerRoutes } = require('./routes.js')

const app = new Koa()

app.context.darkskyApiKey = process.env.API_KEY
app.context.serverPort = process.env.PORT || 3000

app.use(bodyParser())

if (process.env.NODE_ENV !== 'test') {
  app.use(logger())
}

app.use(koaStatic(path.join(__dirname, '..', 'public')))
// app.use(serve('assets', path.join(__dirname, '..', 'public', 'assets')))

registerRoutes(app)

if (!module.parent) {
  app.listen(app.context.serverPort)
  console.log(`donut-monster listening on ${app.context.serverPort}`)
}

module.exports = app
