const request = require('request-promise-native')
const { parseString } = require('xml2js')
const { promisify } = require('util')

const parseXml = promisify(parseString)

const darkSky = ({
  apiKey,
  // TODO: Move location (PDX) to config
  latitude = 45.512794,
  longitude = -122.679565
}) =>
  request({
    headers: {
      'Accept-Encoding': 'gzip,deflate'
    },
    gzip: true,
    url: `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`
  })

const weatherAlerts = ({
  x = 'ORZ006',
  y = '0'
}) =>
  request({
    headers: {
      'User-Agent': 'request'
    },
    url: `https://alerts.weather.gov/cap/wwaatmget.php?x=${x}&y=${y}`
  })
  .then(parseXml)
  .then(({ feed }) => feed)

module.exports = {
  darkSky,
  weatherAlerts
}
