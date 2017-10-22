const ip = require('ip')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './client/index.js',
  module: {
    rules: [
      {
        include: [
          path.resolve(__dirname, 'client')
        ],
        loader: 'babel-loader',
        test: /\.js$/
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(
        `http://${ip.address()}:${process.env.PORT || 3000}`
      )
    }),
    new webpack.NamedModulesPlugin()
  ]
}
