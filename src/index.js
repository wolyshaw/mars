import React, { PureComponent } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'
import Application from './components'
import appStore from 'util/store'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'

import 'antd/dist/antd.less'
import 'static/app.less'

render(
	<Provider store={ appStore }>
		<LocaleProvider locale={ zhCN }>
			<Application/>
		</LocaleProvider>
	</Provider>,
	document.getElementById('app')
)
