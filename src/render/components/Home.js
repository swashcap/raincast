import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ErrorAlert } from './ErrorAlert'
import { WeatherAlerts } from './WeatherAlerts'
import { WeatherDays } from './WeatherDays'
import { fetchForecast } from '../actions/forecast'
import { fetchWeatherAlerts } from '../actions/weather-alerts'

class _Home extends React.Component {
  componentWillMount () {
    this.props.fetchForecast()
    this.props.fetchWeatherAlerts()
  }

  renderErrors () {
    const { forecast, weatherAlerts } = this.props

    const errors = []

    if (forecast.error) {
      errors.push(forecast.error)
    }
    if (weatherAlerts.error) {
      errors.push(weatherAlerts.error)
    }

    if (errors.length) {
      return (
        <div className='Home-errors'>
          {errors.map(({ date, message }, index) => (
            <ErrorAlert
              key={date}
              onClose={() => this.removeError(index)}
              message={message}
            />
          ))}
        </div>
      )
    }
  }

  render () {
    const { forecast, weatherAlerts } = this.props

    return (
      <div className='Home'>
        {this.renderErrors()}
        <WeatherDays {...forecast} />
        <WeatherAlerts {...weatherAlerts} />
      </div>
    )
  }
}

_Home.propTypes = {
  fetchForecast: PropTypes.func.isRequired,
  fetchWeatherAlerts: PropTypes.func.isRequired,
  forecast: PropTypes.shape({
    data: PropTypes.object.isRequired,
    error: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    lastFetched: PropTypes.number
  }),
  weatherAlerts: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    lastFetched: PropTypes.number
  })
}

export const Home = connect(
  ({ forecast, weatherAlerts }) => ({ forecast, weatherAlerts }),
  {
    fetchForecast,
    fetchWeatherAlerts
  }
)(_Home)
