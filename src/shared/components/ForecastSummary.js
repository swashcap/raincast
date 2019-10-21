import React from 'react'
import { Paragraph } from 'grommet'

import { ForecastBox } from './ForecastBox'

export const ForecastSummary = ({ children, ...rest }) => (
  <ForecastBox {...rest}>
    <Paragraph margin='none' size='xxlarge'>{children}</Paragraph>
  </ForecastBox>
)
