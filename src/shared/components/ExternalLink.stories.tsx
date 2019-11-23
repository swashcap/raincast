import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { ExternalLink } from './ExternalLink'

export default {
  component: ExternalLink,
  decorators: [withKnobs],
  title: 'Components|ExternalLink',
}

export const Default = () => (
  <ExternalLink href={text('href', 'https://www.oregonlive.com/#news')} />
)
