const HtmlWebpackPlugin = require('html-webpack-plugin')
const ip = require('ip')
const path = require('path')
const postcssPresetEnv = require('postcss-preset-env')
const webpack = require('webpack')

const pkg = require('./package.json')

const isEnvProduction = process.env.NODE_ENV === 'production'

const baseConfig = {
  devServer: {
    hot: true
  },
  mode: isEnvProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [postcssPresetEnv()],
                  sourceMaps: !isEnvProduction
                }
              }
            ]
          },
          {
            exclude: /node_modules/,
            test: /\.js$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true
                }
              }
            ]
          },
          {
            exclude: [/\.js$/, /\.html$/],
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  output: {
    chunkFilename: `[name]${isEnvProduction ? '.[contenthash]' : ''}.chunk.js`,
    filename: `[name]${isEnvProduction ? '.[contenthash]' : ''}.bundle.js`,
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(
         `http://${ip.address()}:${process.env.PORT || 3000}`
      )
    })
  ]
}

module.exports = [
  {
    ...baseConfig,
    entry: {
      web: './src/web/index.js'
    },
    plugins: [
      ...baseConfig.plugins,
      new HtmlWebpackPlugin({
        chunks: ['web'],
        filename: 'web.html',
        template: path.join(__dirname, 'src/web/web.html'),
        title: pkg.name
      })
    ]
  },
  {
    ...baseConfig,
    entry: {
      electron: './src/render/index.js'
    },
    plugins: [
      ...baseConfig.plugins,
      new HtmlWebpackPlugin({
        chunks: ['electron'],
        template: path.join(__dirname, 'src/render/index.html'),
        title: pkg.name
      })
    ],
    target: 'electron-renderer'
  }
]
