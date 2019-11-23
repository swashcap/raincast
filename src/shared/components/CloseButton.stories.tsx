import React from 'react'
import { action } from '@storybook/addon-actions'

import { CloseButton } from './CloseButton'

export default {
  title: 'Components|CloseButton',
}

export const Default = () => <CloseButton onClick={action('clicked')} />

export const WithLabel = () => (
  <CloseButton label="Close" onClick={action('clicked')} />
)
