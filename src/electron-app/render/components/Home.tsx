import React from 'react'
import { connect } from 'react-redux'
import { Box } from 'grommet'

import { Alert } from '../../../shared/components/Alert'
import { Forecast } from '../../../shared/components/Forecast'
import { WeatherAlertList } from '../../../shared/components/WeatherAlertList'
import { weatherAlertsRequest } from '../../../shared/actions/weatherAlerts'
import { Dispatch } from 'redux'
import { ElectronRenderState } from '../configureStore'
import { forecastRequest } from '../../../shared/actions/forecast'

export type HomeStateProps = Pick<
  ElectronRenderState,
  'forecast' | 'weatherAlerts'
>

export interface HomeDispatchProps {
  dispatch: Dispatch
}

export class _Home extends React.Component<HomeStateProps & HomeDispatchProps> {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(weatherAlertsRequest())
    dispatch(forecastRequest())
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

export const Home = connect<
  HomeStateProps,
  HomeDispatchProps,
  {},
  ElectronRenderState
>(({ forecast, weatherAlerts }) => ({ forecast, weatherAlerts }))(_Home)
