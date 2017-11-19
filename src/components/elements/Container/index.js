import React from 'react'
import { Layout } from 'antd'
import Pages  from '../../pages'
import { openPopup } from '../../popups'

export default props => {
  return (
    <Layout.Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
      <Pages/>
    </Layout.Content>
  )
}
