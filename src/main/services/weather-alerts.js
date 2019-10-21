const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const { parseString } = require('xml2js')

const request = require('../utils/request.js')

const mapResponse = (response) => promisify(parseString)(response)
  .then(({ feed }) => feed.entry ? feed.entry : [])

const weatherAlerts = ({
  x = 'ORZ006',
  y = '0'
}) => {
  if (process.env.NODE_ENV === 'development') {
    return promisify(fs.readFile)(path.resolve(__dirname, '../../../mocks/alerts.xml'), 'utf8')
      .then(mapResponse)
  }

  return request({
    headers: {
      'User-Agent': 'request'
    },
    url: `https://alerts.weather.gov/cap/wwaatmget.php?x=${x}&y=${y}`
  })
    .then(mapResponse)
}

module.exports = weatherAlerts
