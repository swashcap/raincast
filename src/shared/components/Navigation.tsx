import React from 'react'
import * as Icons from 'grommet-icons'
import { Box, Button } from 'grommet'
import { Dispatch } from 'redux'
import { push, RouterState } from 'connected-react-router'

import { UnwrapReactFC } from '../types'

export interface NavigationProps extends UnwrapReactFC<typeof Box> {
  dispatch: Dispatch
  router: RouterState
  routes: {
    href: string
    icon: string
    label: string
  }[]
}

export const Navigation: React.FC<NavigationProps> = ({
  children,
  dispatch,
  routes,
  router,
  ...rest
}) => (
  <Box align="end" as="nav" direction="row" justify="between" {...rest}>
    <Box direction="row" margin="small" gap="small">
      {routes.map(({ href, icon, label }) => (
        <Button
          href={href}
          icon={Icons[icon] && React.createElement(Icons[icon])}
          key={href}
          label={label}
          onClick={e => {
            e.preventDefault()
            dispatch(push(href))
          }}
          primary={router.location.pathname === href}
        />
      ))}
    </Box>
    {!!children && <Box margin="xsmall">{children}</Box>}
  </Box>
)
