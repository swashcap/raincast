const path = require('path')

/**
 * Customize Storybook's Webpack config:
 *
 * {@link https://storybook.js.org/docs/configurations/custom-webpack-config/#webpack-customisation-modes}
 */
module.exports = ({ config }) => {
  // https://storybook.js.org/docs/configurations/typescript-config/#setting-up-typescript-to-work-with-storybook
  config.module.rules.push({
    exclude: /node_modules/,
    test: /\.tsx?/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
      },
    },
  })

  config.resolve.extensions.unshift('.ts', '.tsx')

  config.resolve.alias.electron = path.resolve(__dirname, 'mock-electron.js')

  return config
}
