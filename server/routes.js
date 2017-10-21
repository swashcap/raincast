const ip = require('ip')
const qr = require('qr-image')
const request = require('request-promise-native')
const { get } = require('koa-route')
const { parseString } = require('xml2js')
const { promisify } = require('util')

const parseXml = promisify(parseString)

module.exports.registerRoutes = app => {
  app.use(get('/qr-code', (ctx) => {
    ctx.type = 'image/png'
    ctx.body = qr.image(`http://${ip.address()}:${ctx.serverPort}/admin`)
  }))
  app.use(get('/api/weather', async (ctx) => {
    try {
      // PDX!
      const latitude = 45.512794
      const longitude = -122.679565

      ctx.body = await request({
        headers: {
          'Accept-Encoding': 'gzip,deflate'
        },
        url: `https://api.darksky.net/forecast/${ctx.darkskyApiKey}/${latitude},${longitude}`
      })
    } catch (error) {
      console.error(error)
      ctx.code = 500
    }
  }))
  app.use(get('/api/alerts', async (ctx) => {
    try {
      const response = await request({
        headers: {
          'User-Agent': 'request'
        },
        url: 'https://alerts.weather.gov/cap/wwaatmget.php?x=ORZ006&y=0'
      })
      const { feed: { entry } } = await parseXml(response)
      ctx.body = entry
    } catch (error) {
      console.error(error)
      ctx.code = 500
    }
  }))
}
