import React from 'react'
import { Box, Button } from 'grommet'
import { push } from 'connected-react-router'
import { Camera, Home } from 'grommet-icons'

import { QRImage } from './QRImage'

export const Navigation = ({ config, dispatch, router }) => (
  <Box align='center' as='nav' direction='row' justify='between'>
    <Box direction='row' margin='xsmall'>
      <Button
        label='Home'
        href='/'
        icon={<Home />}
        margin='xsmall'
        onClick={(e) => {
          e.preventDefault()
          dispatch(push('/'))
        }}
        primary={router.location.pathname === '/'}
      />
      <Button
        label='Cameras'
        href='/cameras'
        icon={<Camera />}
        margin='xsmall'
        onClick={(e) => {
          e.preventDefault()
          dispatch(push('/cameras'))
        }}
        primary={router.location.pathname === '/cameras'}
      />
    </Box>
    <Box margin='small'>
      <QRImage address={config.serverAddress} />
    </Box>
  </Box>
)
