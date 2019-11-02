import React from 'react'

import { WeatherAlertList } from './WeatherAlertList'

const data = [{
  'cap:areaDesc': ['Uncomfortably near, it here'],
  'cap:effective': [new Date(Date.now() - 3 * 60 * 60 * 1000)],
  'cap:event': ['Hydrological Outlook'],
  'cap:expires': [new Date(Date.now() + 24 * 60 * 60 * 1000)],
  id: 1,
  link: [{
    $: {
      href: 'https://alerts.weather.com/#'
    }
  }]
}, {
  'cap:areaDesc': ['Wicked stawm rollin in'],
  'cap:effective': [new Date(Date.now() - 24 * 60 * 60 * 1000)],
  'cap:event': ['Apocalypse'],
  'cap:expires': [new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)],
  id: 2,
  link: [{
    $: {
      href: 'https://alerts.weather.com/#'
    }
  }]
}]

export default {
  _data: data,
  component: WeatherAlertList,
  title: 'Components|WeatherAlertList'
}

export const Default = () => (
  <WeatherAlertList
    data={data}
  />
)

export const Error = () => (
  <WeatherAlertList
    data={[]}
    error='Failed to fetch alerts'
  />
)

export const NoAlerts = () => (
  <WeatherAlertList
    data={[{
      title: ['Everything looks fine.']
    }]}
  />
)
