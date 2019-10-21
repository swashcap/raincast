/**
 * Default Storybook configuration
 * {@link https://storybook.js.org/docs/guides/guide-react/}
 */
import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { Grommet } from 'grommet'

import { theme } from '../src/shared/theme'

/**
 * Add a global Storybook decorator to enable app styling:
 * {@link https://storybook.js.org/docs/addons/introduction/#storybook-decorators}
 */
addDecorator(storyFn => <Grommet full theme={theme}>{storyFn()}</Grommet>)

configure(require.context('../src', true, /\.stories\.js$/), module)
