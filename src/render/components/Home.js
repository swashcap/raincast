const React = require('react') // eslint-disable-line no-unused-vars
const PropTypes = require('prop-types')
const { connect } = require('react-redux')

const ErrorAlert = require('./ErrorAlert')
const WeatherAlerts = require('./WeatherAlerts')
const WeatherDays = require('./WeatherDays')
const { fetchForecast } = require('../actions/forecast.js')
const { fetchWeatherAlerts } = require('../actions/weather-alerts.js')

require('./Home.css')

class Home extends React.Component {
  componentWillMount () {
    this.props.fetchForecast()
    this.props.fetchWeatherAlerts()
  }

  renderErrors () {
    const { forecast, weatherAlerts } = this.props

    const errors = []

    if (forecast.error) {
      errors.push(forecast.error)
    }
    if (weatherAlerts.error) {
      errors.push(weatherAlerts.error)
    }

    if (errors.length) {
      return (
        <div className='Home-errors'>
          {errors.map(({ date, message }, index) => (
            <ErrorAlert
              key={date}
              onClose={() => this.removeError(index)}
              message={message}
            />
          ))}
        </div>
      )
    }
  }

  render () {
    const { forecast, weatherAlerts } = this.props

    return (
      <div className='Home'>
        {this.renderErrors()}
        <WeatherDays {...forecast} />
        <WeatherAlerts {...weatherAlerts} />
      </div>
    )
  }
}

Home.propTypes = {
  fetchForecast: PropTypes.func.isRequired,
  fetchWeatherAlerts: PropTypes.func.isRequired,
  forecast: PropTypes.shape({
    data: PropTypes.object.isRequired,
    error: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    lastFetched: PropTypes.number
  }),
  weatherAlerts: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    lastFetched: PropTypes.number
  })
}

module.exports = connect(
  ({ forecast, weatherAlerts }) => ({ forecast, weatherAlerts }),
  {
    fetchForecast,
    fetchWeatherAlerts
  }
)(Home)
