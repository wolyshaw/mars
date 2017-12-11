import React from 'react'
import { Layout, Icon, Avatar, Badge, Menu, Dropdown } from 'antd'
import { clearUserInfo } from 'actions/user/userinfo'
import { dispatch } from 'util/store'
import styles from './index.less'

const menu = (
  <Menu>
    <Menu.Item key='logout'>
      <a onClick={ () => dispatch(clearUserInfo()) } href='javascript:;'><Icon type="logout" style={{ marginRight: '15px'}} />退出</a>
    </Menu.Item>
  </Menu>
)


export default props => {
  let { userinfo } = props
  return (
    <Layout.Header style={{ background: '#fff', padding: '0 15px' }}>
    <Icon
      className='trigger'
      type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={props.toggle}
    />
    <div className={ styles.user }>
      <Dropdown overlay={ menu } placement='bottomCenter'>
        <span style={{ display: 'block'}}>
          <span className={ styles.avatar }>
            <Badge dot><Avatar shape='circle' src={ userinfo ? userinfo.avatar : '' } /></Badge>
          </span>
          { userinfo ? userinfo.niceName : '' }
        </span>
      </Dropdown>
    </div>

  </Layout.Header>
  )
}
