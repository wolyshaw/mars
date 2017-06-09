import React, { Component } from 'react'
import { render } from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import store from './reducers'

import Popups from 'containers/Popups'

import 'antd/dist/antd.less'

const middleware = [thunk]

const appStore = createStore(
	store,
	applyMiddleware(...middleware)
)

const App = props => {
	return (
		<div>
			<Popups/>
		</div>
	)
}

render(
	<Provider store={appStore}>
		<App/>
	</Provider>,
	document.getElementById('app')
)
