const HtmlWebpackPlugin = require('html-webpack-plugin')
const ip = require('ip')
const path = require('path')
const pkg = require('./package.json')
const postcssPresetEnv = require('postcss-preset-env')
const webpack = require('webpack')

const isEnvProduction = process.env.NODE_ENV === 'production'

const baseConfig = {
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
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
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    postcssPresetEnv()
                  ],
                  sourceMaps: !isEnvProduction
                }
              }
            ]
          },
          {
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
            exclude: [/\.html$/, /\.js$/],
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    !isEnvProduction && new webpack.NamedModulesPlugin(),
    !isEnvProduction && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean)
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
        filename: 'web.html',
        template: path.resolve(__dirname, 'src/web/web.html'),
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
      new webpack.DefinePlugin({
        API_URL: JSON.stringify(
          `http://${ip.address()}:${process.env.PORT || 3000}`
        )
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/render/index.html'),
        title: pkg.name
      })
    ],
    target: 'electron-renderer'
  }
]
