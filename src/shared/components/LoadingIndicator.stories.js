import React from 'react'

import { LoadingIndicator } from './LoadingIndicator'

export default {
  component: LoadingIndicator,
  title: 'Components|LoadingIndicator'
}

export const Default = () => <LoadingIndicator />

export const WithText = () => <LoadingIndicator showText />
