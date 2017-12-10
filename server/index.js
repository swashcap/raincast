const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')
const debug = require('debug')
const fs = require('fs')
const koaStatic = require('koa-static')
const logger = require('koa-logger')
const mount = require('koa-mount')
const path = require('path')
const { get } = require('koa-route')

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

// TODO: Refactor static file serving
app.use(koaStatic(path.join(__dirname, '..', 'public')))
app.use(mount(
  '/dist',
  new Koa().use(koaStatic(path.join(__dirname, '..', 'dist')))
))
app.use(get('/admin', (ctx) => {
  ctx.type = 'text/html'
  ctx.body = fs.createReadStream(
    path.join(__dirname, '..', 'public', 'index.html')
  )
}))

registerRoutes(app)

if (!module.parent) {
  app.listen(app.context.serverPort)
  console.log(`raincast listening on ${app.context.serverPort}`)
}

module.exports = app
