import React from 'react'
import { Box, Grid } from 'grommet'

import {
  Clear,
  Cloudy,
  Fog,
  PartlyCloudy,
  Rain,
  Sleet,
  Snow,
  Unknown
} from './WeatherIcon'

const getIcons = (props) => (
  <Grid
    columns={{
      count: 6,
      size: 'auto'
    }}
  >
    <Box>
      <Clear {...props} />
    </Box>
    <Box>
      <Cloudy {...props} />
    </Box>
    <Box>
      <Fog {...props} />
    </Box>
    <Box>
      <PartlyCloudy {...props} />
    </Box>
    <Box>
      <Rain {...props} />
    </Box>
    <Box>
      <Sleet {...props} />
    </Box>
    <Box>
      <Snow {...props} />
    </Box>
    <Box>
      <Unknown {...props} />
    </Box>
  </Grid>
)

export default {
  title: 'Components|WeatherIcon'
}

export const Default = () => getIcons()

export const Night = () => getIcons({ night: true })
