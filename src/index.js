import React, { PureComponent } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'
import Application from './components'
import appStore from 'util/store'

import 'antd/dist/antd.less'
import 'static/app.less'

render(
	<Provider store={ appStore }>
		<Application/>
	</Provider>,
	document.getElementById('app')
)
