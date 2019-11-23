import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'

import { Alert } from './Alert'
import { LoadingIndicator } from './LoadingIndicator'
import { WeatherAlert } from './WeatherAlert'

export const WeatherAlertList = ({ data, error, isLoading }) => {
  if (isLoading) {
    return <LoadingIndicator />
  } else if (error) {
    return <Alert message={error} status="error" />
  } else if (data.length === 1 && !data[0]['cap:event']) {
    return <Alert message={data[0].title[0]} status="info" />
  }

  return (
    <Box gap="medium">
      {data.map(item => (
        <WeatherAlert key={item.id} {...item} />
      ))}
    </Box>
  )
}

WeatherAlertList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  lastFetched: PropTypes.number,
}
