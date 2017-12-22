const HtmlWebpackPlugin = require('html-webpack-plugin')
const ip = require('ip')
const path = require('path')
const pkg = require('./package.json')
const webpack = require('webpack')

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true
  },
  entry: './client/index.js',
  module: {
    rules: [
      {
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ],
        test: /\.css$/
      },
      {
        include: [
          path.resolve(__dirname, 'client')
        ],
        loader: 'babel-loader',
        test: /\.js$/
      },
      {
        include: [
          path.resolve(__dirname, 'client')
        ],
        loader: 'file-loader',
        test: /\.svg$/
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
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client/index.html'),
      title: pkg.name
    })
  ]
}
