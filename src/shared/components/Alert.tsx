import React from 'react'
import { Box, Heading, Stack, Text } from 'grommet'
import {
  StatusCritical,
  StatusDisabled,
  StatusGood,
  StatusInfo,
  StatusUnknown,
  StatusWarning
} from 'grommet-icons'

import { CloseButton, CloseButtonProps } from './CloseButton'

export const statuses = {
  disabled: {
    color: 'status-disabled',
    icon: StatusDisabled
  },
  error: {
    color: 'status-critical',
    icon: StatusCritical
  },
  info: {
    color: undefined,
    icon: StatusInfo
  },
  okay: {
    color: 'status-ok',
    icon: StatusGood
  },
  warning: {
    color: 'status-warning',
    icon: StatusWarning
  },
  unknown: {
    color: 'status-unknown',
    icon: StatusUnknown
  }
}

export interface AlertProps {
  heading?: any;
  onClose?: CloseButtonProps['onClick'];
  message?: any;
  status?: keyof typeof statuses | string;
}

export const Alert: React.FC<AlertProps> = ({ heading, onClose, message, status }) => {
  const { color, icon: Icon } = statuses[status] || statuses.unknown

  return (
    <Stack anchor='right' role='alert'>
      <Box
        align='center'
        border='horizontal'
        direction='row'
        pad={{
          left: 'small',
          right: 'large',
          vertical: 'small'
        }}
      >
        <Icon color={color} size='large' />
        <Box flex pad={{ left: 'medium' }}>
          {!!heading && <Heading level={1} margin='none' size='small'>{heading}</Heading>}
          <Text>{message}</Text>
        </Box>
      </Box>
      <CloseButton onClick={onClose} />
    </Stack>
  )
}
