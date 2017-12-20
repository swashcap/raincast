/* global API_URL */
import preact, { Component } from 'preact' // eslint-disable-line no-unused-vars

import ErrorAlert from './ErrorAlert'
import makeRequest from '../lib/makeRequest'
import WeatherAlerts from './WeatherAlerts'
import './Home.css'

export default class Home extends Component {
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
    this.setState({
      errors: this.state.errors.concat({
        date: Date.now(),
        message: error.message
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
        <div className='Home-error-messages'>
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

  renderWeather () {
    const {
      weather: {
        currently: {
          icon,
          temperature
        }
      }
    } = this.state

    return (
      <div class='weather-forecast' />
    )
  }

  render () {
    return (
      <div className='home'>
        {this.renderErrors()}
        <WeatherAlerts alerts={this.state.alerts} />
        <img alt='Admin QR code' src={`${API_URL}/qr-code.png`} />
      </div>
    )
  }
}
