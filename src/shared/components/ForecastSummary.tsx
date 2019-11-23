import React from 'react'
import { BoxProps, Paragraph } from 'grommet'

import { ForecastBox, ForecastBoxProps } from './ForecastBox'

export const ForecastSummary: React.FC<ForecastBoxProps> = ({
  children,
  ...rest
}) => (
  <ForecastBox {...rest}>
    <Paragraph margin="none" size="xxlarge">
      {children}
    </Paragraph>
  </ForecastBox>
)
