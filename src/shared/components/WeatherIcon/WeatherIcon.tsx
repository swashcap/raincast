import React from 'react'
import style from 'styled-components'

import { WeatherIconClear } from './WeatherIconClear'
import { WeatherIconCloudy } from './WeatherIconCloudy'
import { WeatherIconFog } from './WeatherIconFog'
import { WeatherIconNightTimeClear } from './WeatherIconNightTimeClear'
import { WeatherIconNightTimePartlyCloudy } from './WeatherIconNightTimePartlyCloudy'
import { WeatherIconPartlyCloudy } from './WeatherIconPartlyCloudy'
import { WeatherIconRain } from './WeatherIconRain'
import { WeatherIconSleet } from './WeatherIconSleet'
import { WeatherIconSnow } from './WeatherIconSnow'
import { WeatherIconUnknown } from './WeatherIconUnknown'

/**
 * Weather icon.
 *
 * Map Dark Sky icons to an application icon:
 * {@link https://darksky.net/dev/docs#/dev/docs#response-format}
 *
 * Icons taken from:
 * {@link https://github.com/manifestinteractive/weather-underground-icons}
 */
const BaseIcon = style.div`
  width: 100%;

  > svg > * {
    fill: ${({ theme: { global: { colors } } }) => colors['light-1']}
  }
  > svg .accent-1 {
    fill: ${({ theme: { global: { colors } } }) => colors['accent-4']}
  }
  > svg .accent-2 {
    fill: ${({ theme: { global: { colors } } }) => colors['accent-3']}
  }
`

export type BaseIconProps = React.HTMLAttributes<HTMLDivElement> & {
  night?: boolean
}

export const Clear: React.FC<BaseIconProps> = ({ night = false, ...rest }) => (
  <BaseIcon
    title={`Clear ${night ? 'night' : 'day'}`}
    {...rest}
  >
    {night ? <WeatherIconNightTimeClear /> : <WeatherIconClear />}
  </BaseIcon>
)

export const Rain: React.FC<BaseIconProps> = ({ night, ...rest }) => (
  <BaseIcon
    title='Rain'
    {...rest}
  >
    <WeatherIconRain />
  </BaseIcon>
)

export const Snow: React.FC<BaseIconProps> = ({ night, ...rest }) => (
  <BaseIcon
    title='Snow'
    {...rest}
  >
    <WeatherIconSnow />
  </BaseIcon>
)

export const Sleet: React.FC<BaseIconProps> = ({ night, ...rest }) => (
  <BaseIcon
    title='Sleet'
    {...rest}
  >
    <WeatherIconSleet />
  </BaseIcon>
)

export const Fog: React.FC<BaseIconProps> = ({ night, ...rest }) => (
  <BaseIcon
    title='Fog'
    {...rest}
  >
    <WeatherIconFog />
  </BaseIcon>
)

export const Cloudy: React.FC<BaseIconProps> = ({ night, ...rest }) => (
  <BaseIcon
    title='Cloudy'
    {...rest}
  >
    <WeatherIconCloudy />
  </BaseIcon>
)

export const Unknown: React.FC<BaseIconProps>  = ({ night, ...rest }) => (
  <BaseIcon
    title='Unknown'
    {...rest}
  >
    <WeatherIconUnknown />
  </BaseIcon>
)

export const PartlyCloudy: React.FC<BaseIconProps> = ({ night = false, ...rest }) => (
  <BaseIcon
    title={`Partly cloudy ${night ? 'night' : 'day'}`}
    {...rest}
  >
    {night ? <WeatherIconNightTimePartlyCloudy /> : <WeatherIconPartlyCloudy />}
  </BaseIcon>
)

/**
 * Accept's a DarkSky `DataPoint['icon']` value:
 *
 * {@link https://darksky.net/dev/docs#data-point}
 */
export const getIcon = (icon: string) => {
  switch (icon) {
    case 'clear-day':
      return <Clear />
    case 'clear-night':
      return <Clear night />
    case 'partly-cloudy-day':
      return <PartlyCloudy />
    case 'partly-cloudy-night':
      return <PartlyCloudy night />
    case 'cloudy':
      return <Cloudy />
    case 'fog':
    case 'wind':
      return <Fog />
    case 'rain':
      return <Rain />
    case 'sleet':
      return <Sleet />
    case 'snow':
      return <Snow />
    default:
      return <Unknown />
  }
}
