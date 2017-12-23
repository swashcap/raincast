import preact from 'preact' // eslint-disable-line no-unused-vars

import './Cameras.css'

const Cameras = () => (
  <div className='Cameras'>
    <a href="http://www.kgw.com/weather/live-cameras/portland-skyline-wells-fargo">
      <img
        alt="Wells Fargo"
        src="http://cdn.tegna-media.com/kgw/weather/wellsfargo.jpg"
      />
      <p>Downtown Portland</p>
    </a>
    <a href='https://tripcheck.com/DynamicReports/Report/Cameras'>
      <img
        alt='US-26 at Gov Camp'
        src="https://tripcheck.com/RoadCams/cams/US26 at Govt Camp Lp Rd_pid1776.JPG?rand=1513974775609" />
      <p>Government Camp</p>
    </a>
    <a href='http://www.oregonsurf.com/pages/cams.html'>
      <img
        alt='Roads End, Lincoln City'
        src='http://www.lcsurfshop.com/webcam32.jpg'
      />
      <p>Lincoln City</p>
    </a>
    <a href='https://www.timberlinelodge.com/conditions'>
      <img
        alt='Timerline Lodge'
        src='https://www.timberlinelodge.com/snowcameras/lodge.jpg?nocache=1513976335'
      />
      <p>Timerline Lodge</p>
    </a>
  </div>
)

export default Cameras
