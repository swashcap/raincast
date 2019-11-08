import React from 'react'
import { Button } from 'grommet'
import { Close } from 'grommet-icons'
import { UnwrapReactFC } from '../types'

export type CloseButtonProps = UnwrapReactFC<typeof Button>

export const CloseButton: React.FC<CloseButtonProps> = (props) => <Button a11yTitle='Close' focusIndicator hoverIndicator icon={<Close size='medium' />} {...props} />
