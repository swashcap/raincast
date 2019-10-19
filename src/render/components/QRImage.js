import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import qr from 'qr-image'
import { shell } from 'electron'
import { ThemeContext } from 'grommet'

import { LoadingIndicator } from './LoadingIndicator'

export const QRImage = ({ address }) => {
  const theme = useContext(ThemeContext)

  if (!address) {
    return (
      <div className='QRImage is-loading'>
        <LoadingIndicator />
      </div>
    )
  }

  const { path, size } = qr.svgObject(address)

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
      <svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
        <path fill={theme.global.colors['accent-4']} d={path} />
      </svg>
    </a>
  )
}

QRImage.propTypes = {
  address: PropTypes.string
}
