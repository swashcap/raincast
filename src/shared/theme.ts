import { dark } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'

export const theme = deepMerge({}, dark, {
  global: {
    font: {
      family: '-apple-system, BlinkMacSystemFont, sans-serif',
    },
  },
})
