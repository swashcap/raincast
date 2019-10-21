import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'

import { ForecastCurrent } from '../../shared/components/ForecastCurrent'
import { ForecastDay } from '../../shared/components/ForecastDay'
import { ForecastSummary } from '../../shared/components/ForecastSummary'
import { LoadingIndicator } from '../../shared/components/LoadingIndicator'

export const WeatherDays = ({
  data: weatherData,
  error,
  isLoading
}) => {
  if (isLoading || !Object.keys(weatherData).length) {
    return (
      <div className='WeatherDays WeatherDays-loading'>
        <LoadingIndicator />
      </div>
    )
  } else if (error) {
    return (
      <div className='WeatherDays WeatherDays-error'>
        {error}
      </div>
    )
  }

  const {
    currently,
    daily: {
      data,
      summary: dailySummary
    }
  } = weatherData

  return (
    <Box gap='large'>
      <ForecastCurrent {...currently} />
      <ForecastSummary>{dailySummary}</ForecastSummary>
      {data.map(({
        icon,
        summary,
        temperatureHigh,
        temperatureHighTime,
        temperatureLow,
        temperatureLowTime,
        time
      }) => (
        <ForecastDay
          icon={icon}
          key={time}
          summary={summary}
          temperatureHigh={temperatureHigh}
          temperatureHighTime={temperatureHighTime}
          temperatureLow={temperatureLow}
          temperatureLowTime={temperatureLowTime}
          time={time}
        />
      ))}
    </Box>
  )
}

WeatherDays.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  lastFetched: PropTypes.number
}
