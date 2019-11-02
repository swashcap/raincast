import React from 'react'

import forecastDay from './ForecastDay.stories'
import forecastCurrently from './ForecastCurrent.stories'
import { Forecast } from './Forecast'

export default {
  component: Forecast,
  title: 'Components|Forecast'
}

export const Default = () => (
  <Forecast
    data={{
      currently: forecastCurrently._data,
      daily: {
        data: forecastDay._data,
        summary: 'Helluva week here, folks.'
      }
    }}
  />
)
