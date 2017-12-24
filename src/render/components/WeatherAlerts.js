const React = require('react') // eslint-disable-line no-unused-vars
const moment = require('moment')

const LoadingIndicator = require('./LoadingIndicator')

require('./WeatherAlerts.css')

const WeatherAlerts = ({ alerts }) => {
  if (!alerts.length) {
    return (
      <aside className='WeatherAlerts WeatherAlerts-loading'>
        <LoadingIndicator />
      </aside>
    )
  } else if (alerts.length === 1 && !alerts[0]['cap:event']) {
    return (
      <aside className='WeatherAlerts WeatherAlerts-empty'>
        <p>{alerts[0].title[0]}</p>
      </aside>
    )
  }

  return (
    <aside className='WeatherAlerts'>
      {alerts.map(({
        'cap:areaDesc': [areaDesc],
        'cap:effective': [effective],
        'cap:event': [name],
        'cap:expires': [expires],
        id: [id],
        link: [{ '$': { href } }]
      }) => {
        const effectiveTime = moment(effective)
        const expiresTime = moment(expires)

        return (
          <article className='WeatherAlerts-item' key={id}>
            <a href={href} rel='bookmark'>
              <h1 className='WeatherAlerts-item-name'>{name}</h1>
              <dl className='WeatherAlerts-item-meta'>
                <dt>Effective:</dt>
                <dd>
                  <time datetime={effective}>
                    {effectiveTime.fromNow()}
                    <span>{effectiveTime.format('YYYY-MM-DD HH:mm')}</span>
                  </time>
                </dd>
                <dt>Expires:</dt>
                <dd>
                  <time datetime={expires}>
                    {expiresTime.fromNow()}
                    <span>{expiresTime.format('YYYY-MM-DD HH:mm')}</span>
                  </time>
                </dd>
              </dl>
              <p className='WeatherAlerts-item-area'>{areaDesc}</p>
            </a>
          </article>
        )
      })}
    </aside>
  )
}

module.exports = WeatherAlerts
