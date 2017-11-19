const path = require('path')
const webpack = require('webpack')
const CleanPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./config')

const publicPath = '/'
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'

const setResolve = dirname => path.resolve(path.join(__dirname, 'src', dirname))

module.exports = {
  entry: {
    vendor: ['react', 'react-router-dom', 'react-dom', 'redux', 'react-redux', 'redux-thunk', 'antd'],
    bundle: './src/index.js'
  },
  output: {
    filename: '[chunkhash:5].[name].js',
    path: path.resolve('./dist'),
    publicPath: '/',
    chunkFilename: '[chunkhash:5].[name].[id].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets:  ['react', 'env']
        }
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules&localIdentName=[name]--[local]--[hash:base64:5]', 'less-loader']
        })
      },
      {
        test: /\.(css|less)$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader'
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
    new CleanPlugin(['dist'], {
      root: path.join(__dirname),
      verbose: true
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'static', 'index_default.html'),
      title: config.site.title,
      keywords: config.site.keywords,
      description: config.site.description
    }),
    new ExtractTextPlugin({
      filename: 'static/[chunkhash:5].[name].css'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: Infinity
    })
  ]
}
