import React from 'react'
import { Box } from 'grommet'
import { action } from '@storybook/addon-actions'
import { withKnobs, select, text } from '@storybook/addon-knobs'

import { Alert, statuses } from './Alert'

export default {
  component: Alert,
  decorators: [withKnobs],
  title: 'Components|Alert'
}

export const Default = () => (
  <Box pad='small'>
    <Alert
      message={text('message', 'Something eventful happened!')}
      onClose={action('clicked')}
      status={select('status', Object.keys(statuses), 'info')}
    />
  </Box>
)

export const StatusVariants = () => (
  <>
    {Object.keys(statuses).map(status => (
      <Box key={status} pad='small'>
        <Alert
          heading='An error occurred'
          key={status}
          message='Network unreachable'
          onClose={action('clicked')}
          status={status}
        />
      </Box>
    ))}
  </>
)
