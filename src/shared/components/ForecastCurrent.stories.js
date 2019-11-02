import React from 'react'

import { ForecastCurrent } from './ForecastCurrent'
import forecastStories from './Forecast.stories'

export default {
  component: ForecastCurrent,
  title: 'Components|ForecastCurrent'
}

export const Default = () => (
  <ForecastCurrent {...forecastStories._data.currently} />
)
