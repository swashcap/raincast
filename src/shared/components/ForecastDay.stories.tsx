import React from 'react'

import { ForecastDay } from './ForecastDay'
import forecastStories from './Forecast.stories'

export default {
  title: 'Components|ForecastDay',
}

export const Default = () => (
  <>
    {forecastStories._data.daily.data.map(props => (
      <ForecastDay key={props.time} {...props} />
    ))}
  </>
)
