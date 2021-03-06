import React from 'react'
import { Box, BoxProps } from 'grommet'

export interface ForecastBoxProps extends BoxProps {
  children: any
  icon?: any
}

export const ForecastBox: React.FC<ForecastBoxProps> = ({
  children,
  icon,
  ...rest
}) => (
  <Box align="center" direction="row" gap="medium" {...rest}>
    <Box align="center" width="small">
      {icon}
    </Box>
    <Box fill>{children}</Box>
  </Box>
)
