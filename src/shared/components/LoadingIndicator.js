import React from 'react'
import { Box, Text } from 'grommet'
import styled, { keyframes } from 'styled-components'

import { useTheme } from '../hooks/useTheme'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

const Rotate = styled.svg`
  animation: 1s linear infinite ${rotate};
`

/**
 * A spinning loading indicator.
 *
 * {@link https://codepen.io/aurer/pen/jEGbA?editors=1100}
 */
export const LoadingIndicator = ({ showText = false, ...rest }) => {
  const theme = useTheme()

  return (
    <Box a11yTitle='Content loading' align='center' gap='small' margin='medium' {...rest}>
      <Rotate
        height='40px'
        version='1.1'
        viewBox='0 0 50 50'
        width='40px'
        x='0px'
        xmlSpace='preserve'
        y='0px'
      >
        <path fill={theme.global.colors.brand} d='M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z' />
      </Rotate>
      {!!showText && <Text color='light-6' size='small'>Loading…</Text>}
    </Box>
  )
}
