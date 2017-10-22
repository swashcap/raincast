/* global API_URL,fetch */
import { h, Component } from 'preact' // eslint-disable-line no-unused-vars

export default class Home extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      alerts: []
    }
  }

  componentWillMount () {
    fetch(`${API_URL}/api/alerts`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`)
        }

        return response.json()
      })
      .then((alerts) => {
        this.setState({
          alerts,
          error: this.state.error
        })
      })
      .catch((error) => {
        console.error(error)
        this.setState({
          alerts: this.state.alerts,
          error: error.message
        })
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

  render () {
    return (
      <div className='home'>
        {this.renderAlerts()}
        <img alt='Admin QR code' src='/qr-code.png' />
      </div>
    )
  }
}
