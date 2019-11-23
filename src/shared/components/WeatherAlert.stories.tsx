import React from 'react'

import { WeatherAlert } from './WeatherAlert'
import weatherAlertListStories from './WeatherAlertList.stories'

export default {
  component: WeatherAlert,
  parameters: {
    notes: {
      markdown: `# Weather Alert

This component displays an alert from [alerts.weather.gov](https://alerts.weather.gov).
      `,
    },
  },
  title: 'Components|WeatherAlert',
}

export const Default = () => (
  <WeatherAlert {...weatherAlertListStories._data[0]} />
)
