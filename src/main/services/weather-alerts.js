const { promisify } = require('util')
const { parseString } = require('xml2js')

const request = require('../utils/request.js')

const parseXml = promisify(parseString)

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
    .then(({ feed }) => feed.entry ? feed.entry : [])

module.exports = weatherAlerts
