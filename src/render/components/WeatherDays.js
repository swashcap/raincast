import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import moment from 'moment'

import { LoadingIndicator } from './LoadingIndicator'
import { WeatherIcon } from './WeatherIcon'
import { formatTemperature } from '../lib/formatTemperature'

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
    currently: {
      icon,
      summary: currentSummary,
      temperature
    },
    daily: {
      data,
      summary: dailySummary
    }
  } = weatherData
  const hours = new Date().getHours()

  return (
    <div className='WeatherDays'>
      <div className='WeatherDays-current'>
        <WeatherIcon
          icon={icon}
          isNight={hours > 8 && hours < 20}
        />
        <h1 className='WeatherDays-current-temp'>
          {formatTemperature(temperature)}
        </h1>
        <h2 className='WeatherDays-current-summary'>{currentSummary}</h2>
        <p className='WeatherDays-current-daily'>{dailySummary}</p>
      </div>

      <div className='WeatherDays-items'>
        {data.map(({
          icon,
          summary,
          temperatureHigh,
          temperatureHighTime,
          temperatureLow,
          temperatureLowTime,
          time
        }) => {
          const highTime = moment(temperatureHighTime * 1000)
          const lowTime = moment(temperatureLowTime * 1000)

          return (
            <div
              className='WeatherDays-item'
              key={time}
            >
              <h1 className='WeatherDays-item-date'>
                {moment(time * 1000).format('YYYY-MM-DD')}
              </h1>
              <WeatherIcon icon={icon} />
              <p className='WeatherDays-item-summary'>{summary}</p>
              <div className='WeatherDays-item-high'>
                <h2>{formatTemperature(temperatureHigh)}</h2>
                <time dateTime={highTime.format()}>
                  {highTime.format('HH:ss')}
                </time>
              </div>
              <div className='WeatherDays-item-high'>
                <h2>{formatTemperature(temperatureLow)}</h2>
                <time dateTime={lowTime.format()}>
                  {lowTime.format('HH:ss')}
                </time>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

WeatherDays.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  lastFetched: PropTypes.number
}
