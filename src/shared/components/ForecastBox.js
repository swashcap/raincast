import React from 'react'
import { Box } from 'grommet'

export const ForecastBox = ({ children, icon, ...rest }) => (
  <Box align='center' direction='row' gap='medium' {...rest}>
    <Box align='center' width='small'>{icon}</Box>
    <Box fill>{children}</Box>
  </Box>
)
