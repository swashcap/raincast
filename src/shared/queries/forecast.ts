export const forecastQuery = `
{
  forecast {
    currently {
      icon
      summary
      temperature
    }
    daily {
      data {
        icon
        summary
        temperatureHigh
        temperatureHighTime
        temperatureLow
        temperatureLowTime
        time
      }
      summary
    }
  }
}`
