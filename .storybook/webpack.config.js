const path = require('path')

/**
 * Customize Storybook's Webpack config:
 *
 * {@link https://storybook.js.org/docs/configurations/custom-webpack-config/#webpack-customisation-modes}
 */
module.exports = ({ config }) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      electron: path.resolve(__dirname, 'mock-electron.js')
    }
  }
})