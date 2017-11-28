import React, { PureComponent } from 'react'
import loading from '../../elements/Loading'
import { Avatar, Table } from 'antd'

const Loading = new loading()
const columns = [{
  title: '头像',
  key: 'avatar',
  width: 60,
  render: (user) => <Avatar size='large' src={ user.avatar } />
}, {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '邮箱',
  dataIndex: 'email',
  key: 'email',
}, {
  title: '创建时间',
  dataIndex: 'creataAt',
  key: 'creataAt',
}]

export default class Dashboard extends PureComponent {
  constructor(props) {
    super(...props)
    this.state = {
      users: [],
      loading: false
    }
  }

  render() {
    return (
      <div onClick={() => {
        Loading.openLoading()
        setTimeout(() => Loading.closeLoading(), 5000)
      }}>
        <Table bordered loading={ this.state.loading } columns={ columns } dataSource={ this.state.users } />
      </div>
    )
  }
}
