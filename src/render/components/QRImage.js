const React = require('react')
const PropTypes = require('prop-types')
const qr = require('qr-image')
const { shell } = require('electron')

const LoadingIndicator = require('./LoadingIndicator.js')
require('./QRImage.css')

class QRImage extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    event.preventDefault()

    const { address } = this.props

    if (address) {
      shell.openExternal(address)
    }
  }

  render () {
    const { address, color } = this.props

    if (!address) {
      return (
        <div className='QRImage is-loading'>
          <LoadingIndicator />
        </div>
      )
    }

    const { path, size } = qr.svgObject(address)

    return (
      <div className='QRImage'>
        <a
          onClick={this.handleClick}
          href={address}
        >
          <svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
            <path fill={color} d={path} />
          </svg>
        </a>
      </div>
    )
  }
}

QRImage.propTypes = {
  address: PropTypes.string,
  color: PropTypes.string
}

module.exports = QRImage
