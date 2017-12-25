const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')
const debug = require('debug')
const fs = require('fs')
const path = require('path')
const { get, post } = require('koa-route')

const app = new Koa()
const log = debug('raincast:server')

const maybeIpc = (channel, arg) => {
  log('webContents.send', channel, arg)
  if (process.versions.electron) {
    const electron = require('electron')
    /**
     * {@link https://electronjs.org/docs/api/web-contents#webcontentsgetallwebcontents}
     */
    const webContents = electron.webContents.getAllWebContents()

    // Should only be 1 window
    webContents.forEach((contents) => {
      contents.send(channel, arg)
    })
  }
}

app.use(bodyParser())
app.use(cors())
// TODO: Hack koa-logger to use debug
app.use((ctx, next) => {
  log(ctx.method, ctx.originalUrl)
  return next()
})

app.use(get('/', (ctx) => {
  ctx.set('Content-Type', 'text/html')
  ctx.body = fs.createReadStream(path.resolve(__dirname, '../web/index.html'))
}))

app.use(get('/routes', (ctx) => {
  ctx.body = {
    active: 'home',
    collection: {
      cameras: {
        name: 'Cameras'
      },
      home: {
        name: 'Home'
      }
    }
  }
}))

app.use(post('/routes/active', (ctx) => {
}))

if (!module.parent) {
  const port = process.env.PORT || 3000
  app.listen(port)
  log(`listening on ${port}`)
}

module.exports = app
