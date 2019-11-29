import React from 'react'

import { _Home as Home, HomeStateProps } from './Home'
import forecastStories from '../../../shared/components/Forecast.stories'
import weatherAlertListStories from '../../../shared/components/WeatherAlertList.stories'
import { Dispatch } from 'redux'

export default {
  component: Home,
  title: 'Pages|Home',
}

const dispatch = console.log as Dispatch

export const Default = () => (
  <Home
    dispatch={dispatch}
    {...({
      forecast: {
        data: forecastStories._data,
      },
      weatherAlerts: {
        data: [],
      },
    } as HomeStateProps)}
  />
)

export const WithWeatherAlerts = () => (
  <Home
    dispatch={dispatch}
    {...({
      forecast: {
        data: forecastStories._data,
      },
      weatherAlerts: {
        data: weatherAlertListStories._data,
      },
    } as HomeStateProps)}
  />
)
