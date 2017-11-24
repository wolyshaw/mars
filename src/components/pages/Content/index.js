import React, { PureComponent } from 'react'
import { Row, Col, Table } from 'antd'
import loading from '../../elements/Loading'
import { openPopup, closePopup } from '../../popups'

const textOverflow = {maxWidth: '350px', overflow: 'hidden', display: 'inline-block', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}
const Loading = new loading()
const columns = [{
  title: '图片',
  render: (post) => <img src={ post.image } width='100' height='auto' />,
  key: 'image',
  width: 100
}, {
  title: '标题',
  dataIndex: 'title',
  key: 'name',
  width: 150
}, {
  title: '内容',
  render: (post) => <span style={ textOverflow } title={ post.content }>{ post.content }</span>,
  key: 'content',
  width: 150
}, {
  title: '创建时间',
  dataIndex: 'creataAt',
  key: 'creataAt',
}, {
  title: '更新时间',
  dataIndex: 'updateAt',
  key: 'updateAt',
}]

export default class Content extends PureComponent {
  constructor(props) {
    super(...props)
    this.state = {
      posts: [],
      loading: true
    }
  }

  componentWillMount() {
    fetch('/api/posts')
      .then(res => res.json())
      .then(r => this.setState({loading: false, posts: r}))
  }

  render() {
    return (
      <div onClick={() => Loading.openLoading()}>
        <Row>
          <Col span={24}>
            <Table bordered loading={ this.state.loading } dataSource={ this.state.posts } columns={columns} />
          </Col>
        </Row>
      </div>
    )
  }
}
