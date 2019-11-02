import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Alert } from '../../shared/components/Alert'
import { Forecast } from '../../shared/components/Forecast'
import { fetchForecast } from '../actions/forecast'
import { fetchWeatherAlerts } from '../actions/weather-alerts'
import { WeatherAlertList } from '../../shared/components/WeatherAlertList'

export class _Home extends React.Component {
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
            <Alert
              key={date}
              message={message}
              onClose={() => this.removeError(index)}
              status='error'
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
        <Forecast {...forecast} />
        <WeatherAlertList {...weatherAlerts} />
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
