import React from 'react'
import { Heading } from 'grommet'

import { ForecastBox } from './ForecastBox'
import { formatTemperature } from '../../render/lib/formatTemperature'
import { getIcon } from './WeatherIcon/WeatherIcon'

export const ForecastCurrent = ({
  icon,
  summary,
  temperature,
  ...rest
}) => (
  <ForecastBox icon={getIcon(icon)} {...rest}>
    <Heading margin='none' size='large'>{formatTemperature(temperature)}</Heading>
    <Heading margin='none'>{summary}</Heading>
  </ForecastBox>
)
