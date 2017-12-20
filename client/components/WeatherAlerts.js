import preact from 'preact' // eslint-disable-line no-unused-vars

import './WeatherAlerts.css'

const WeatherAlerts = ({ alerts }) => {
  if (alerts.length === 1 && !alerts[0]['cap:event']) {
    return (
      <aside className='WeatherAlerts WeatherAlerts-empty'>
        <p>{alerts[0].title[0]}</p>
      </aside>
    )
  }

  return (
    <aside className='WeatherAlerts'>
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

export default WeatherAlerts
