import React, { Component } from 'react'
import { Layout, Badge, Icon, Avatar, Dropdown, Menu } from 'antd'
import styles from 'static/common/Head.less'

const { Header } = Layout

const UserMeta = props => {

	const menu = (
		<Menu>
			<Menu.Item key="1"><Icon type="solution" /> 我的信息</Menu.Item>
			<Menu.Item key="2"><Icon type="logout" /> 退出</Menu.Item>
		</Menu>
	)

	let user = props.user

	return (
		<Dropdown overlay={ menu }>
			<span className={ styles.userMeta } style={{ marginRight: 24 }}>
				<Badge count={ 1 }>
					<Avatar className={ styles.avatar } icon='user' />
				</Badge>
				<span className={ styles.name }>{ user.username ? user.username : '' }</span>
			</span>
		</Dropdown>
	)
}

const Head = props => {
	return (
		<Header style={{ background: '#fff', padding: 0 }} >
			<UserMeta user={ props.user }/>
		</Header>
	)
}

export default Head
