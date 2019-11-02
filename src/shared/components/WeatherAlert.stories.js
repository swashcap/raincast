import React from 'react'

import { WeatherAlert } from './WeatherAlert'

const data = {
  'cap:areaDesc': ['Uncomfortably near, it here'],
  'cap:effective': [new Date(Date.now() - 3 * 60 * 60 * 1000)],
  'cap:event': ['Hydrological Outlook'],
  'cap:expires': [new Date(Date.now() + 24 * 60 * 60 * 1000)],
  link: [{
    $: {
      href: 'https://alerts.weather.com/#'
    }
  }]
}

export default {
  _data: data,
  component: WeatherAlert,
  parameters: {
    notes: {
      markdown: `# Weather Alert

This component displays an alert from [alerts.weather.gov](https://alerts.weather.gov).
      `
    }
  },
  title: 'Components|WeatherAlert'
}

export const Default = () => (
  <WeatherAlert {...data} />
)
