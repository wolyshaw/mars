import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

const MenuList = [
	{
		path: '/',
		text: '控制面板',
		icon: 'user'
	},
	{
		path: '/user',
		text: '用户管理',
		icon: 'user',
		childrens: [
			{
				path: '/user/list',
				text: '用户列表'
			}
		]
	}
]

const getActiveLink = () => {
	let open = '/', selected = location.pathname, path = selected.split('/')
	if (path.length > 2) {
		path.pop()
		open = path.join('/')
	}
	return { open, selected }
}

const LeftMenu = props => {
	let path = getActiveLink(),
		setItem = list => {
			return list.map(item => {
				if (item.childrens) {
					return (
						<SubMenu
							key={ item.path }
							title={<span><Icon type={ item.icon } /><span className="nav-text">{ item.text }</span></span>}
						>
							{
								setItem(item.childrens)
							}
						</SubMenu>
					)
				} else {
					return <Menu.Item key={ item.path }>{ item.icon ? <Icon type={ item.icon } /> : '' }{ item.text }</Menu.Item>
				}
			})
		}
	return (
		<div>
			<div className="logo" />
			<Menu theme="dark" mode={props.mode} defaultOpenKeys={[path.open]} defaultSelectedKeys={[path.selected]}>
				{ setItem(MenuList) }
			</Menu>
		</div>
	)
}

export default LeftMenu
