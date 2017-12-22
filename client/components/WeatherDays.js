import preact from 'preact' // eslint-disable-line no-unused-vars

import LoadingIndicator from './LoadingIndicator'
import WeatherIcon from './WeatherIcon'
import './WeatherDays.css'

const WeatherDays = ({ weather }) => {
  if (!weather) {
    return (
      <div className='WeatherDays WeatherDays-loading'>
        <LoadingIndicator />
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
  } = weather
  const hours = new Date().getHours()
  const temp = (Math.round(temperature * 10) / 10).toFixed(1)

  return (
    <div className='WeatherDays'>
      <WeatherIcon
        icon={icon}
        isNight={hours > 8 && hours < 20}
      />
      <h1>{temp}&deg;</h1>
      <p>{currentSummary}</p>

      <div>
        <p>{dailySummary}</p>
        {data.map(({
          time
        }) => (
          <div key={time} />
        ))}
      </div>
    </div>
  )
}

export default WeatherDays
