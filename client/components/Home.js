import { h, Component } from 'preact' // eslint-disable-line no-unused-vars

import makeRequest from '../lib/makeRequest'

export default class Home extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      alerts: [],
      errorMessages: [],
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
          errorMessages: this.state.errorMessages,
          weather: weather || this.state.weather
        })
      })
  }

  handleRequestError (error) {
    console.error(error)
    this.setState({
      alerts: this.state.alerts,
      errorMessages: this.state.errorMessages.concat(error.message),
      weather: this.state.weather
    })
  }

  renderAlerts () {
    const { alerts } = this.state

    return (
      <aside className='weather-alerts'>
        {alerts.map(({
          'cap:effective': effective,
          'cap:event': name,
          id: [id],
          link: [{ '$': { href } }]
        }) => (
          <article className='weather-alert' key={id}>
            <a href={href} rel='bookmark'>
              <h1>{name}</h1>
              <time datetime={effective}>{effective}</time>
            </a>
          </article>
        )
        )}
      </aside>
    )
  }

  renderErrorMessages () {
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
        {this.renderErrorMessages()}
        {this.renderAlerts()}
        <img alt='Admin QR code' src='/qr-code.png' />
      </div>
    )
  }
}
