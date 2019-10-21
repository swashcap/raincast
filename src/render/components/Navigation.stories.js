import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import { Navigation } from './Navigation'

export default {
  component: Navigation,
  title: 'Components|Navigation'
}

export const Default = () => {
  const [pathname, setPathname] = useState('/')

  return (
    <Navigation
      config={{
        routes: [{
          href: '/',
          icon: 'Home',
          label: 'Home'
        }, {
          href: '/cameras',
          icon: 'Camera',
          label: 'Cameras'
        }, {
          href: '/satellites',
          icon: 'Satellite',
          label: 'Satellites'
        }]
      }}
      dispatch={(a) => {
        action('dispatched')(a)
        setPathname(a.payload.args[0])
      }}
      router={{
        location: {
          pathname
        }
      }}
    />
  )
}
