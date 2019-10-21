import React from 'react'
import { Box, Grid, Heading, Paragraph, Text } from 'grommet'
import moment from 'moment'

import { ForecastBox } from './ForecastBox'
import { getIcon } from './WeatherIcon/WeatherIcon'
import { formatTemperature } from '../../render/lib/formatTemperature'

export const ForecastDay = ({
  icon,
  summary,
  temperatureHigh,
  temperatureHighTime,
  temperatureLow,
  temperatureLowTime,
  time,
  ...rest
}) => {
  const highTime = moment(temperatureHighTime * 1000)
  const lowTime = moment(temperatureLowTime * 1000)
  const today = moment(time * 1000)

  return (
    <ForecastBox
      icon={
        <Box width='xsmall'>{getIcon(icon)}</Box>
      }
      {...rest}
    >
      <Grid
        columns={['1fr', '1fr', '1fr']}
        fill='horizontal'
        gap='medium'
      >
        <Heading
          margin='none'
          size='medium'
        >
          {today.format('ddd')}
          {' '}
          <Text
            color='light-6'
            size='xxlarge'
            weight='normal'
          >
            {today.format('MMM D')}
          </Text>
        </Heading>
        <Box>
          <Heading level='2' margin='none' size='large'>
            {formatTemperature(temperatureHigh)}
            {' '}
            <Text as='time' color='light-6' dateTime={highTime.format()} weight='normal'>{highTime.format('HH:ss')}</Text>
          </Heading>
        </Box>
        <Box>
          <Heading level='2' margin='none' size='large'>
            {formatTemperature(temperatureLow)}
            {' '}
            <Text as='time' color='light-6' dateTime={highTime.format()} weight='normal'>{lowTime.format('HH:ss')}</Text>
          </Heading>
        </Box>
      </Grid>
      <Paragraph size='large'>{summary}</Paragraph>
    </ForecastBox>
  )
}
