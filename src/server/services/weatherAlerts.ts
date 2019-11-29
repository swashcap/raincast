import { parseStringPromise } from 'xml2js'

import { serviceRequest } from './serviceRequest'
import { ServiceContext } from '../plugins/apolloServer'

export interface WeatherAlertsAuthor {
  name: [string]
}

export interface WeatherAlertsLink {
  $: {
    href: string
  }
}

export interface WeatherAlertsValue {
  value: string[]
  valueName: string[]
}

export interface WeatherAlertsEntry {
  author: [WeatherAlertsAuthor]
  'cap:areaDesc': [string]
  'cap:category': [string]
  'cap:certainty': [string]
  // ISO 8068 timestamp
  'cap:effective': [string]
  'cap:event': [string]
  // ISO 8068 timestamp
  'cap:expires': [string]
  'cap:geocode': WeatherAlertsValue[]
  'cap:msgType': [string]
  'cap:parameter': WeatherAlertsValue[]
  'cap:polygon': string[]
  'cap:severity': [string]
  'cap:status': [string]
  'cap:urgency': [string]
  id: string
  link: WeatherAlertsLink[]
  // ISO 8068 timestamp
  published: [string]
  summary: [string]
  title: [string]
  // ISO 8068 timestamp
  updated: [string]
}

export interface WeatherAlertsFeed {
  feed: {
    $: {
      xmlns: 'http://www.w3.org/2005/Atom'
      'xmlns:cap': 'urn:oasis:names:tc:emergency:cap:1.1'
      'xmlns:ha': 'http://www.alerting.net/namespace/index_1.0'
    }
    author: [WeatherAlertsAuthor]
    entry: WeatherAlertsEntry[]
    // Name of server
    generator: [string]
    // Reflected URL
    id: [string]
    link: [WeatherAlertsLink]
    logo: [string]
    title: [string]
    // ISO 8068 timestamp
    updated: [string]
  }
}

export interface WeatherAlertsOptions {
  x: string
  y: string
}

export const weatherAlerts = async (
  { x = 'ORZ006', y = '0' }: WeatherAlertsOptions,
  context: ServiceContext
): Promise<WeatherAlertsFeed> => {
  const response = await serviceRequest(
    {
      headers: {
        'User-Agent': 'request',
      },
      url: `https://alerts.weather.gov/cap/wwaatmget.php?x=${x}&y=${y}`,
    },
    context
  )

  return parseStringPromise(response.data)
}
