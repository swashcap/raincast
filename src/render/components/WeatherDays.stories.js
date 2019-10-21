import React from 'react'

import forecastDay from '../../shared/components/ForecastDay.stories'
import forecastCurrently from '../../shared/components/ForecastCurrent.stories'
import { WeatherDays } from './WeatherDays'

export default {
  component: WeatherDays,
  title: 'Page|WeatherDays'
}

export const Default = () => (
  <WeatherDays
    data={{
      currently: forecastCurrently._data,
      daily: {
        data: forecastDay._data,
        summary: 'Helluva week here, folks.'
      }
    }}
  />
)
