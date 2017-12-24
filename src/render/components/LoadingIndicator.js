import preact from 'preact' // eslint-disable-line no-unused-vars

import './LoadingIndicator.css'

/**
 * {@link https://codepen.io/aurer/pen/jEGbA?editors=1100}
 */
const LoadingIndicator = () => {
  const svgProps = {
    'xml:space': 'preserve',
    height: '40px',
    version: '1.1',
    viewBox: '0 0 50 50',
    width: '40px',
    x: '0px',
    y: '0px'
  }

  return (
    <div
      aria-label='Loading content'
      className='LoadingIndicator'
    >
      <svg {...svgProps}>
        <path fill='#f00' d='M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z' />
      </svg>
      <span>Loading…</span>
    </div>
  )
}

export default LoadingIndicator
