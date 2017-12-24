const React = require('react') // eslint-disable-line no-unused-vars

const ErrorAlert = require('./ErrorAlert')
const makeRequest = require('../lib/makeRequest')
const WeatherAlerts = require('./WeatherAlerts')
const WeatherDays = require('./WeatherDays')

require('./Home.css')

class Home extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      alerts: [],
      errors: [],
      weather: null
    }

    this.handleRequestError = this.handleRequestError.bind(this)
  }

  componentWillMount () {
    return Promise.all([
      makeRequest('/api/alerts').catch(this.handleRequestError),
      makeRequest('/api/weather').catch(this.handleRequestError)
    ])
      .then(([alerts, weather]) => {
        this.setState({
          alerts: Array.isArray(alerts) ? alerts : this.state.alerts,
          errors: this.state.errors,
          weather: weather || this.state.weather
        })
      })
  }

  handleRequestError (error) {
    console.error(error)

    const message = !error.stack
      ? 'Failed to fetch' // for Safari
      : error.message

    this.setState({
      errors: this.state.errors.concat({
        date: Date.now(),
        message
      })
    })
  }

  removeError (index) {
    this.setState({
      errors: this.state.errors.filter((_, i) => i !== index)
    })
  }

  setState (newState) {
    super.setState(Object.assign(this.state, newState))
  }

  renderErrors () {
    const { errors } = this.state

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
    const { alerts, weather } = this.state

    return (
      <div className='Home'>
        {this.renderErrors()}
        <WeatherDays weather={weather} />
        <WeatherAlerts alerts={alerts} />
      </div>
    )
  }
}

module.exports = Home
