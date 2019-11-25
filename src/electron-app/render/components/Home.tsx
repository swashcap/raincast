import React from 'react'
import { connect } from 'react-redux'
import { Box } from 'grommet'

import { Alert } from '../../shared/components/Alert'
import { Forecast } from '../../shared/components/Forecast'
import { fetchForecast } from '../../../shared/actions/forecast'
import { fetchWeatherAlerts } from '../../../shared/actions/weather-alerts'
import { WeatherAlertList } from '../../shared/components/WeatherAlertList'

export interface HomeStateProps {
  forecast: any
  weatherAlerts: any
}

export interface HomeDispatchProps {
  fetchForecast: () => void
  fetchWeatherAlerts: () => void
}

export class _Home extends React.Component<HomeStateProps & HomeDispatchProps> {
  componentWillMount() {
    this.props.fetchForecast()
    this.props.fetchWeatherAlerts()
  }

  renderErrors() {
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
        <div className="Home-errors">
          {errors.map(({ date, message }, index) => (
            <Alert key={date} message={message} status="error" />
          ))}
        </div>
      )
    }
  }

  render() {
    const { forecast, weatherAlerts } = this.props

    return (
      <>
        {this.renderErrors()}
        <Box direction="row" gap="medium" pad="medium">
          <Forecast {...forecast} />
          <WeatherAlertList {...weatherAlerts} />
        </Box>
      </>
    )
  }
}

export const Home = connect<HomeStateProps, HomeDispatchProps, {}, any>(
  ({ forecast, weatherAlerts }) => ({ forecast, weatherAlerts }),
  {
    fetchForecast,
    fetchWeatherAlerts,
  }
)(_Home)
