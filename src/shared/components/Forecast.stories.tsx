import React from 'react'

import { Forecast } from './Forecast'

const data = {
  currently: {
    icon: 'clear-day',
    summary: 'Come taste some of that sun',
    temperature: 99
  },
  daily: {
    data: [{
      icon: 'partly-cloudy-day',
      summary: 'Partly cloudy with no chance in hell',
      temperatureHigh: 67,
      temperatureHighTime: 0,
      temperatureLow: 45,
      temperatureLowTime: 0,
      time: Date.now() / 1000
    }, {
      icon: 'sleet',
      summary: 'So cold and so wet',
      temperatureHigh: 36.55,
      temperatureHighTime: 0,
      temperatureLow: 30.25,
      temperatureLowTime: 0,
      time: Date.now() / 1000 + 24 * 60 * 60
    }, {
      icon: 'snow',
      summary: 'Snowpocalypse incoming',
      temperatureHigh: 31.12,
      temperatureHighTime: 0,
      temperatureLow: 24.58,
      temperatureLowTime: 0,
      time: Date.now() / 1000 + 24 * 60 * 60 * 2
    }],
    summary: 'Helluva week here, folks.'
  }
}

export default {
  _data: data,
  component: Forecast,
  title: 'Components|Forecast'
}

export const Default = () => (
  <Forecast
    data={data}
  />
)
