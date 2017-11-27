import React, { PureComponent } from 'react'
import { Avatar, Table } from 'antd'
import Fetch from 'util/fetch'

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

export default class User extends PureComponent {
  constructor(props) {
    super(...props)
    this.state = {
      users: [],
      loading: true
    }
  }

  componentWillMount() {
    Fetch('/api/users')
      .then(r => this.setState({users: r || [], loading: false}))
      .catch(err => this.setState({loading: false}))
  }

  render() {
    return (
      <div>
        <Table bordered loading={ this.state.loading } columns={ columns } dataSource={ this.state.users } />
      </div>
    )
  }
}
