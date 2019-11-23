import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import { parseString } from 'xml2js'

import { request } from '../utils/request'

const mapResponse = (response) => promisify(parseString)(response)
  .then(({ feed }) => feed.entry ? feed.entry : [])

export interface WeatherAlert {
  'cap:areaDesc': string[]
  'cap:effective': string[]
  'cap:event': string[]
  'cap:expires': string[]
  id: string
  link: {
    $: {
      href: string
    }
  }[]
}

export const weatherAlerts = ({
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
