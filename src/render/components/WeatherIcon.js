import React from 'react'

import clear from '../img/clear.svg'
import cloudy from '../img/cloudy.svg'
import fog from '../img/fog.svg'
import ntClear from '../img/nt_clear.svg'
import ntCloudy from '../img/nt_cloudy.svg'
import ntFog from '../img/nt_fog.svg'
import ntPartlyCloudy from '../img/nt_partlycloudy.svg'
import ntRain from '../img/nt_rain.svg'
import ntSleet from '../img/nt_sleet.svg'
import ntSnow from '../img/nt_snow.svg'
import ntUnknown from '../img/nt_unknown.svg'
import partlyCloudy from '../img/partlycloudy.svg'
import rain from '../img/rain.svg'
import sleet from '../img/sleet.svg'
import snow from '../img/snow.svg'
import unknown from '../img/unknown.svg'

/**
 * Weather icon.
 *
 * Map Dark Sky icons to an application icon:
 * {@link https://darksky.net/dev/docs#/dev/docs#response-format}
 *
 * Icons taken from:
 * {@link https://github.com/manifestinteractive/weather-underground-icons}
 */
export const WeatherIcon = ({ icon, isNight }) => {
  let alt
  let src

  switch (icon) {
    case 'clear-day':
      alt = 'Clear day icon'
      src = clear
      break
    case 'clear-night':
      alt = 'Clear night icon'
      src = ntClear
      break
    case 'rain':
      if (isNight) {
        alt = 'Night rain icon'
        src = ntRain
      } else {
        alt = 'Rain icon'
        src = rain
      }
      break
    case 'snow':
      if (isNight) {
        alt = 'Night snow icon'
        src = ntSnow
      } else {
        alt = 'Snow icon'
        src = snow
      }
      break
    case 'sleet':
      if (isNight) {
        alt = 'Night sleet icon'
        src = ntSleet
      } else {
        alt = 'Sleet icon'
        src = sleet
      }
      break
    case 'wind':
    case 'fog':
      if (isNight) {
        alt = 'Night wind icon'
        src = ntFog
      } else {
        alt = 'Wind icon'
        src = fog
      }
      break
    case 'cloudy':
      if (isNight) {
        alt = 'Night cloudy icon'
        src = ntCloudy
      } else {
        alt = 'Cloudy icon'
        src = cloudy
      }
      break
    case 'partly-cloudy-day':
      alt = 'Partly cloudy day icon'
      src = partlyCloudy
      break
    case 'partly-cloudy-night':
      alt = 'Partly cloudy night icon'
      src = ntPartlyCloudy
      break
    default:
      alt = 'Unknown weather icon'
      src = isNight ? ntUnknown : unknown
  }

  return (
    <img
      alt={alt}
      className='WeatherIcon'
      src={src}
    />
  )
}
