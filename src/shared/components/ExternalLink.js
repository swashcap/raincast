import React from 'react'
import { Anchor } from 'grommet'
import { Link } from 'grommet-icons'

export const ExternalLink = ({ href, ...rest }) => {
  const url = new URL(href)
  const label = url.hostname.replace(/^www\./, '')

  return (
    <Anchor
      icon={<Link size='small' />}
      label={label}
      href={href}
      size='small'
      {...rest}
    />
  )
}
