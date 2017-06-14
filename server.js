const path = require('path')
const express = require('express')

const app = express()
const isProduction = process.env.NODE_ENV === 'production'
const serverPort = process.env.NODE_PORT || '8000'

if (isProduction) {
	app.use('/dist', express.static('dist'))

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'dist', 'index.html'))
	})
} else {
	const webpack = require('webpack')
	const compression = require('compression')
	const proxy = require('http-proxy-middleware')
	const devLoad = require('webpack-dev-middleware')
	const hotLoad = require('webpack-hot-middleware')
	const webpackDevConfig = require('./webpack.config.dev')
	const compiler = webpack(webpackDevConfig)

	app.use(
		'/manage',
		proxy({
			target: 'http://192.168.10.182:8000'
		})
	)

	app.use(compression())
	app.use('/dev', express.static('dev'))
	app.use(hotLoad(compiler))
	app.use(devLoad(compiler, {
		publicPath: '/',
		noInfo: true,
		stats: {
			colors: true
		}
	}))

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'dev', 'index.html'))
	})
}

app.listen(serverPort, err => {
	err ? console.log(err) : console.log(`server online ${serverPort}`)
})
