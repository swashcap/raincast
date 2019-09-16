const React = require('react') // eslint-disable-line no-unused-vars
const PropTypes = require('prop-types')
const moment = require('moment')

const LoadingIndicator = require('./LoadingIndicator')

require('./WeatherAlerts.css')

const WeatherAlerts = ({ data, error, isLoading }) => {
  if (isLoading || !data.length) {
    return (
      <aside className='WeatherAlerts WeatherAlerts-loading'>
        <LoadingIndicator />
      </aside>
    )
  } else if (error) {
    return (
      <aside className='WeatherAlerts WeatherAlerts-error'>
        {error}
      </aside>
    )
  } else if (data.length === 1 && !data[0]['cap:event']) {
    return (
      <aside className='WeatherAlerts WeatherAlerts-empty'>
        <p>{data[0].title[0]}</p>
      </aside>
    )
  }

  return (
    <aside className='WeatherAlerts'>
      {data.map(({
        'cap:areaDesc': [areaDesc],
        'cap:effective': [effective],
        'cap:event': [name],
        'cap:expires': [expires],
        id: [id],
        link: [{ $: { href } }]
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
                  <time dateTime={effective}>
                    {effectiveTime.fromNow()}
                    <span>{effectiveTime.format('YYYY-MM-DD HH:mm')}</span>
                  </time>
                </dd>
                <dt>Expires:</dt>
                <dd>
                  <time dateTime={expires}>
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

WeatherAlerts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  lastFetched: PropTypes.number
}

module.exports = WeatherAlerts
