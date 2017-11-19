import React, { PureComponent } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

export default props => {
  return (
    <Layout.Sider
      trigger={ null }
      collapsible
      collapsed={ props.collapsed }
      style={{background: '#fff'}}
    >
      <div style={{height: '60px', width: '100%'}}/>
      <Menu mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <Link to="/">
            <Icon type="user" />
            <span className="nav-text">控制面板</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/content">
            <Icon type="video-camera" />
            <span className="nav-text">内容管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/">
            <Icon type="upload" />
            <span className="nav-text">用户管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/">
            <Icon type="bar-chart" />
            <span className="nav-text">系统管理</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}
