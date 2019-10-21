import React from 'react'

import { ForecastDay } from './ForecastDay'

const data = [{
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
}]

export default {
  _data: data,
  title: 'Components|ForecastDay'
}

export const Default = () => (
  <>
    {data.map((props) => <ForecastDay key={props.time} {...props} />)}
  </>
)
