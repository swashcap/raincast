const HtmlWebpackPlugin = require('html-webpack-plugin')
const ip = require('ip')
const path = require('path')
const pkg = require('./package.json')
const webpack = require('webpack')

const baseConfig = {
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
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
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        test: /\.js$/
      },
      {
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'file-loader',
        test: /\.svg$/
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}

module.exports = [
  Object.assign({
    entry: {
      web: './src/web/index.js'
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        filename: 'web.html',
        template: path.resolve(__dirname, 'src/web/web.html'),
        title: pkg.name
      })
    ]
  }, baseConfig),
  Object.assign({
    entry: {
      electron: './src/render/index.js'
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
        template: path.resolve(__dirname, 'src/render/index.html'),
        title: pkg.name
      })
    ],
    target: 'electron-renderer'
  }, baseConfig)
]
