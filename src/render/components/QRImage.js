const React = require('react')
const PropTypes = require('prop-types')
const qr = require('qr-image')

const QRImage = ({ address }) => (
  <div
    className='QRImage'
    dangerouslySetInnerHTML={{
      __html: qr.svgObject(address)
    }}
  />
)

QRImage.propTypes = {
  address: PropTypes.string.isRequired
}

module.exports = QRImage
