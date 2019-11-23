import React from 'react'
import { shell } from 'electron'

import { QRAddressImage } from '../../shared/components/QRAddressImage'

export const QRImageLink: React.FC<{ address: string }> = ({ address }) => (
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
