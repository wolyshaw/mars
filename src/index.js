import React, { Component } from 'react'
import { render } from 'react-dom'

import { Button, notification } from 'antd'

import 'antd/dist/antd.less'

const openNotification = () => {
	notification.open({
		message: 'Notification Title',
		description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
	});
};

const App = props => {
	return (
		<div>
			<Button type="primary" onClick={openNotification}>Open the notification box</Button>
		</div>
	)
}

render(
	<App/>,
	document.getElementById('app')
)
