import React from 'react'
import { Button } from 'grommet'
import { Close } from 'grommet-icons'

export const CloseButton = (props) => <Button a11yTitle='Close' focusIndicator hoverIndicator icon={<Close size='medium' />} {...props} />
