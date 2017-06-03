const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./config')

const publicPath = '/'
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'

const setResolve = dirname => path.resolve(path.join(__dirname, 'src', dirname))

module.exports = {
  entry: ['./src/index.js', hotMiddlewareScript],
  output: {
    filename: 'index.js',
    path: path.resolve('./dev'),
    publicPath: publicPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets:  ['react', 'es2015']
        }
      },
      {
        test: /\.css$|\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader!less-loader?modules&localIdentName=[name]--[local]--[hash:base64:5]']
        })
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      util: setResolve('util'),
      static: setResolve('static'),
      actions: setResolve('actions'),
      containers: setResolve('containers'),
      components: setResolve('components')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'static', 'index_default.html'),
      title: config.site.title,
      keywords: config.site.keywords,
      description: config.site.description
    }),
    new ExtractTextPlugin('static/styles.css')
  ]
}
