import React, { Component } from 'react'
import { Layout, Badge, Icon, Avatar, Dropdown, Menu } from 'antd'
import { clearToken } from 'actions/user/token'
import { openPopup } from 'actions/popups'
import { getUserData, dispatch } from 'util/util'

import styles from 'static/common/Head.less'

const { Header } = Layout

const UserMeta = props => {

	const menu = (
		<Menu>
			<Menu.Item key="1"><div onClick={ () => dispatch(openPopup({ name: 'userinfo' })) }><Icon type="solution" /> 我的信息</div></Menu.Item>
			<Menu.Item key="2"><div onClick={ () => clearToken(getUserData) }><Icon type="logout" /> 退出</div></Menu.Item>
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
