const React = require('react')
const PropTypes = require('prop-types')
const qr = require('qr-image')

const LoadingIndicator = require('./LoadingIndicator.js')

const QRImage = ({ address }) => {
  if (!address) {
    return (
      <div className='QRImage is-loading'>
        <LoadingIndicator />
      </div>
    )
  }

  return (
    <div
      className='QRImage'
      dangerouslySetInnerHTML={{
        __html: qr.svgObject(address)
      }}
    />
  )
}

QRImage.propTypes = {
  address: PropTypes.string
}

module.exports = QRImage
