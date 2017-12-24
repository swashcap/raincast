const formatTemperature = value =>
  `${(Math.round(value * 10) / 10).toFixed(1)}°`

export default formatTemperature
