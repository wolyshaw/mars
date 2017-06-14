import React, { Component } from 'react'
import { Layout, Badge, Icon } from 'antd'

import styles from 'static/common/Head.less'

const { Header } = Layout

const UserMeta = props => {
	return (
		<span className={ styles.userMeta }>
			<span style={{ marginRight: 24 }}>
				<Badge count={1}><Icon type="user" style={{ fontSize: 26, color: '#08c' }} /></Badge>
			</span>
		</span>
	)
}

const Head = props => {
	return (
		<Header style={{ background: '#fff', padding: 0 }} >
			<UserMeta/>
		</Header>
	)
}

export default Head
