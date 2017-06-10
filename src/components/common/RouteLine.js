import React, { Component } from 'react'
import { Breadcrumb } from 'antd'

const RouteLine = props => {
  return (
    <Breadcrumb style={{ margin: '12px 0' }}>
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default RouteLine
