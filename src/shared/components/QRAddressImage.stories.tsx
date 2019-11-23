import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'

import { QRAddressImage } from './QRAddressImage'

export default {
  component: QRAddressImage,
  decorators: [withKnobs],
  title: 'Components|QRAddressImage',
}

export const Default = () => (
  <QRAddressImage
    address="http://127.0.0.1:3000"
    color={select(
      'color',
      {
        Default: null,
        'Accent 1': 'accent-1',
        'Accent 2': 'accent-2',
        'Accent 3': 'accent-3',
        'Accent 4': 'accent-4',
      },
      'Default'
    )}
    style={{
      width: '200px',
    }}
  />
)
