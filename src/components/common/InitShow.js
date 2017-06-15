import React, { Component } from 'react'
import { render } from 'react-dom'
import { Layout, Menu } from 'antd'
import { Route } from 'react-router-dom'

import Floating from 'components/common/Floating'
import {
	LeftMenu,
	Foot,
	Head,
	AppRoute
} from 'components/common'

import styles from 'static/app.less'

const { Content, Sider } = Layout
const SubMenu = Menu.SubMenu

const InitShow = props => {
	return (
		<Layout className={ styles.main }>
			<Sider
				collapsible
				collapsed={ props.collapsed }
				onCollapse={ props.onCollapse }
			>
				<LeftMenu mode={ props.mode }/>
			</Sider>
			<Layout>
				<Head user = { props.main.user }/>
				<Content style={{ margin: '0 16px', marginTop: 16 }}>
					<AppRoute/>
				</Content>
				<Foot/>
			</Layout>
			<Floating/>
		</Layout>
	)
}
export default InitShow
