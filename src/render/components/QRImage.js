import React from 'react'
import PropTypes from 'prop-types'
import { shell } from 'electron'

import { LoadingIndicator } from '../../shared/components/LoadingIndicator'
import { QRAddressImage } from '../../shared/components/QRAddressImage'

export const QRImage = ({ address }) => {
  if (!address) {
    return <LoadingIndicator />
  }

  return (
    <a
      onClick={(event) => {
        event.preventDefault()

        if (address) {
          shell.openExternal(address)
        }
      }}
      href={address}
      style={{
        display: 'block'
      }}
    >
      <QRAddressImage address={address} />
    </a>
  )
}

QRImage.propTypes = {
  address: PropTypes.string
}
