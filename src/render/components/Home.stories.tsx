import React from 'react'

import { _Home as Home } from './Home'
import forecastStories from '../../shared/components/Forecast.stories'
import weatherAlertListStories from '../../shared/components/WeatherAlertList.stories'

export default {
  component: Home,
  title: 'Pages|Home'
}

export const Default = () => (
  <Home
    fetchForecast={() => undefined}
    fetchWeatherAlerts={() => undefined}
    forecast={{
      data: forecastStories._data
    }}
    weatherAlerts={{
      data: []
    }}
  />
)

export const WithWeatherAlerts = () => (
  <Home
    fetchForecast={() => undefined}
    fetchWeatherAlerts={() => undefined}
    forecast={{
      data: forecastStories._data
    }}
    weatherAlerts={{
      data: weatherAlertListStories._data
    }}
  />
)
