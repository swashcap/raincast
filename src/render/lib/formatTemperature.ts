export const formatTemperature = (value: number) =>
  `${(Math.round(value * 10) / 10).toFixed(1)}°`
