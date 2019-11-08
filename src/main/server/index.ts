import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import debug from 'debug'
import fs from 'fs'
import path from 'path'
import { get, post } from 'koa-route'

import { routePush } from '../../shared/channels'

const app = new Koa()
const log = debug('raincast:server')

const sendIpcMessage = (channel, arg) => {
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
  ctx.body = fs.createReadStream(path.resolve(__dirname, '../../web/web.html'))
}))

app.use(get('/routes', (ctx) => {
  ctx.body = {
    cameras: {
      active: false,
      name: 'Cameras'
    },
    home: {
      active: true,
      name: 'Home'
    }
  }
}))

/**
 * {@link https://github.com/koajs/bodyparser}
 */
app.use(post('/routes/active', (ctx) => {
  const reqBody = ctx.request.body

  if (reqBody && typeof reqBody === 'object' && 'active' in reqBody) {
    const newRoute = reqBody.active
    sendIpcMessage(routePush, newRoute)
    ctx.body = {
      active: newRoute
    }
  } else {
    ctx.throw(400)
  }
}))

if (!module.parent) {
  app.listen(3000)
}

export default app
