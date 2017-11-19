import React from 'react'
import { Layout, Icon } from 'antd'

export default props => {
  return (
    <Layout.Header style={{ background: '#fff', padding: '0 15px' }}>
    <Icon
      className="trigger"
      type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={props.toggle}
    />
  </Layout.Header>
  )
}
