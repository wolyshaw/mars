const express = require('express')
const jsonServer = require('json-server')
const path = require('path')
const compression = require('compression')
const app = express()
const middlewares = jsonServer.defaults()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevConfig = require('./webpack.config.dev')
const config = require('./config')
const mock = require('./mock')
const isProduction = process.env.NODE_ENV === 'production'

const compiler = webpack(webpackDevConfig)

let buildDir = isProduction ? 'dist' : 'dev'

if(!isProduction) {
  app.use('/api', jsonServer.bodyParser)
  app.use('/api', middlewares)
  app.use('/api', jsonServer.router(mock))
  if(process.env.NODE_ENV !== 'mock') {
    app.use(compression())
    app.use(webpackDevMiddleware(compiler, {
      publicPath: webpackDevConfig.output.publicPath,
      noInfo: true,
      stats: {
        colors: true
      }
    }))
    app.use(webpackHotMiddleware(compiler))
  } else {
    buildDir = 'dist'
  }
}

app.use(express.static(buildDir))
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, buildDir, 'index.html'))
})
var PORT = process.env.PORT || config.port
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
