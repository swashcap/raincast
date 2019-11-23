import React from 'react'
import qr from 'qr-image'

import { useTheme } from '../hooks/useTheme'

export const QRAddressImage = ({ address, color = 'accent-4', ...rest }) => {
  const theme = useTheme()

  const { path, size } = qr.svgObject(address)

  return (
    <svg viewBox={`0 0 ${size} ${size}`} {...rest}>
      <path fill={theme.global.colors[color] as string} d={path} />
    </svg>
  )
}
