import React, { PureComponent } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'

const LeftMenuSider = props => {
  return (
    <Layout.Sider
      trigger={ null }
      collapsible
      collapsed={ props.collapsed }
      style={{background: '#fff'}}
    >
      <div style={{height: '60px', width: '100%'}}/>
      <Menu mode="inline" defaultSelectedKeys={['/']}>
        <Menu.Item key="/">
          <Link to="/">
            <Icon type="user" />
            <span className="nav-text">控制面板</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/content">
          <Link to="/content">
            <Icon type="video-camera" />
            <span className="nav-text">内容管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/user">
          <Link to="/user">
            <Icon type="user" />
            <span className="nav-text">用户管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/system">
          <Link to="/system">
            <Icon type="bar-chart" />
            <span className="nav-text">系统管理</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

export default withRouter(LeftMenuSider)
