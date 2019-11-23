import * as React from 'react'
import { Box, Button } from 'grommet'
import { push, RouterState } from 'connected-react-router'
import * as Icons from 'grommet-icons'
import { Dispatch } from 'redux'

import { QRImageLink } from './QRImageLink'
import { LoadingIndicator } from '../../shared/components/LoadingIndicator'
import { UnwrapReactFC } from '../../shared/types'

export interface NavigationProps extends UnwrapReactFC<typeof Box> {
  config: any;
  dispatch: Dispatch
  router: RouterState
}

export const Navigation: React.FC<NavigationProps> = ({ config, dispatch, router, ...rest }) => (
  <Box align='end' as='nav' direction='row' justify='between' {...rest}>
    <Box direction='row' margin='small' gap='small'>
      {config.routes.map(({ href, icon, label }) => (
        <Button
          href={href}
          icon={Icons[icon] && React.createElement(Icons[icon])}
          key={href}
          label={label}
          onClick={(e) => {
            e.preventDefault()
            dispatch(push(href))
          }}
          primary={router.location.pathname === href}
        />
      ))}
    </Box>
    <Box margin='xsmall'>
      {config.serverAddress ? <QRImageLink address={config.serverAddress} /> : <LoadingIndicator />}
    </Box>
  </Box>
)
