import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

const LeftMenu = props => {
  return (
    <div>
      <div className="logo" />
      <Menu theme="dark" mode={props.mode} defaultSelectedKeys={['7']}>
        <SubMenu
          key="sub1"
          title={<span><Icon type="user" /><span className="nav-text">User</span></span>}
        >
          <Menu.Item key="7"><Link to={ '/' }>控制面板</Link></Menu.Item>
          <Menu.Item key="1"><Link to={ '/user' }>用户列表</Link></Menu.Item>
          <Menu.Item key="2">Bill</Menu.Item>
          <Menu.Item key="3">Alex</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={<span><Icon type="team" /><span className="nav-text">Team</span></span>}
        >
          <Menu.Item key="4">Team 1</Menu.Item>
          <Menu.Item key="5">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="6">
          <span>
            <Icon type="file" />
            <span className="nav-text">File</span>
          </span>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default LeftMenu
