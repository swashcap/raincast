import React from 'react'
import PropTypes from 'prop-types'
import { shell } from 'electron'

import { QRAddressImage } from '../../shared/components/QRAddressImage'

export const QRImageLink = ({ address }) => (
  <a
    onClick={(event) => {
      event.preventDefault()
      shell.openExternal(address)
    }}
    href={address}
    style={{
      display: 'block'
    }}
  >
    <QRAddressImage
      address={address}
      style={{
        width: '4rem'
      }}
    />
  </a>
)

QRImageLink.propTypes = {
  address: PropTypes.string
}
