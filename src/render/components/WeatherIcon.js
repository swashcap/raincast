const react = require('react') // eslint-disable-line no-unused-vars

const clear = require('../img/clear.svg')
const cloudy = require('../img/cloudy.svg')
const fog = require('../img/fog.svg')
const ntClear = require('../img/nt_clear.svg')
const ntCloudy = require('../img/nt_cloudy.svg')
const ntFog = require('../img/nt_fog.svg')
const ntPartlyCloudy = require('../img/nt_partlycloudy.svg')
const ntRain = require('../img/nt_rain.svg')
const ntSleet = require('../img/nt_sleet.svg')
const ntSnow = require('../img/nt_snow.svg')
const ntUnknown = require('../img/nt_unknown.svg')
const partlyCloudy = require('../img/partlycloudy.svg')
const rain = require('../img/rain.svg')
const sleet = require('../img/sleet.svg')
const snow = require('../img/snow.svg')
const unknown = require('../img/unknown.svg')

require('./WeatherIcon.css')

/**
 * Weather icon.
 *
 * Map Dark Sky icons to an application icon:
 * {@link https://darksky.net/dev/docs#/dev/docs#response-format}
 *
 * Icons taken from:
 * {@link https://github.com/manifestinteractive/weather-underground-icons}
 */
const WeatherIcon = ({ icon, isNight }) => {
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

module.exports = WeatherIcon
