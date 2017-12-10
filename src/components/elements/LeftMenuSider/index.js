import React, { PureComponent } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'

const renderMenu = list => {
	return list.map(item => {
		if (item.childrens && item.childrens.length) {
			return (
				<Menu.SubMenu
					key={ item.path }
					disabled={ item.disabled }
					title={ <span><Icon type={ item.icon }/><span className="nav-text">{ item.title }</span></span> }
				>
					{ renderMenu(item.childrens) }
				</Menu.SubMenu>
			)
		} else {
			return (
				<Menu.Item key={ item.path } disabled={ item.disabled }>
					<Link to={ item.path }>{ item.icon ? <Icon type={ item.icon } /> : '' }{ item.title }</Link>
				</Menu.Item>
			)
		}
	})
}

const getActiveLink = () => {
	let open = '/', selected = location.pathname, path = selected.split('/')
	if (path.length > 2) {
		path.pop()
		open = path.join('/')
	}
	return { open, selected }
}

const LeftMenuSider = props => {
  let { userinfo } = props
  let path = getActiveLink()
  return (
    <Layout.Sider
      trigger={ null }
      collapsible
      collapsed={ props.collapsed }
      style={{background: '#fff'}}
    >
      <div style={{height: '60px', width: '100%'}}/>
      <Menu mode="inline" defaultOpenKeys={[path.open]} defaultSelectedKeys={[path.selected]}>
        { userinfo ? renderMenu(userinfo.menu) : null }
      </Menu>
    </Layout.Sider>
  )
}

export default withRouter(LeftMenuSider)
