import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import { Navigation } from './Navigation'
import { RouterState } from 'connected-react-router'
import { Dispatch } from 'redux'

export default {
  component: Navigation,
  title: 'Components|Navigation',
}

export const Default = () => {
  const [pathname, setPathname] = useState('/')

  const dispatch = (a: any) => {
    action('dispatched')(a)
    setPathname(a.payload.args[0])
  }

  return (
    <Navigation
      routes={[
        {
          href: '/',
          icon: 'Home',
          label: 'Home',
        },
        {
          href: '/cameras',
          icon: 'Camera',
          label: 'Cameras',
        },
        {
          href: '/satellites',
          icon: 'Satellite',
          label: 'Satellites',
        },
      ]}
      dispatch={dispatch as Dispatch}
      router={
        {
          location: {
            pathname,
          },
        } as RouterState
      }
    />
  )
}
