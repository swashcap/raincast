import React from 'react'

import { ForecastCurrent } from './ForecastCurrent'

const data = {
  icon: 'clear-day',
  summary: 'Come taste some of that sun',
  temperature: 99
}

export default {
  _data: data,
  component: ForecastCurrent,
  title: 'Components|ForecastCurrent'
}

export const Default = () => (
  <ForecastCurrent {...data} />
)
