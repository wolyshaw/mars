import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Main from 'containers/Main'
import appStore from 'util/store'

import 'antd/dist/antd.less'

render(
	<Provider store={appStore}>
		<Main/>
	</Provider>,
	document.getElementById('app')
)
