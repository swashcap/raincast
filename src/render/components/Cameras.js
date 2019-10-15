import React from 'react'

export const Cameras = () => {
  const now = Date.now()
  const items = [{
    alt: 'Wells Fargo',
    link: 'http://www.kgw.com/weather/live-cameras/portland-skyline-wells-fargo',
    name: 'Downtown Portland',
    src: 'http://cdn.tegna-media.com/kgw/weather/wellsfargo.jpg'
  }, {
    alt: 'US-26 at Gov Camp',
    link: 'https://tripcheck.com/DynamicReports/Report/Cameras',
    name: 'Government Camp',
    src: `https://tripcheck.com/RoadCams/cams/US26%20at%20Govn%20Camp%20Maint_pid1899.JPG?rand=${now}`
  }, {
    alt: 'Roads End, Lincoln City',
    link: 'http://www.oregonsurf.com/pages/cams.html',
    name: 'Lincoln City',
    src: 'http://www.lcsurfshop.com/webcam32.jpg'
  }, {
    alt: 'Timerline Lodge',
    link: 'https://www.timberlinelodge.com/conditions',
    name: 'Timerline Lodge',
    src: `https://www.timberlinelodge.com/snowcameras/lodge.jpg?nocache=${Math.floor(now / 1000)}`
  }]

  return (
    <div className='Cameras'>
      {items.map(({ alt, link, name, src }) => (
        <a href={link} key={link}>
          <img alt={alt} src={src} />
          <p>{name}</p>
        </a>
      ))}
    </div>
  )
}
