import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { Spin, Table } from 'antd'
import { fetchData } from 'util/util'

class Article extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: []
		}
		this.loading = false
	}

	componentWillMount() {
		this.loading = true
		fetchData({
			url: '/manage/article/list',
			hint: false,
			body: {
				pageindex: '1',
				pagenum: '10'
			},
			success: r => {
				this.loading = false
				this.setState({
					list: r.data
				})
			}
		})
	}

	render() {
		const columns = [{
			title: '标题',
			dataIndex: 'title',
			render: (text, data) => <Link to={ '/article/' + data.id }>{ text }</Link>,
		}, {
			title: '别名',
			dataIndex: 'alias',
		}, {
			title: '摘要',
			dataIndex: 'excerpt',
		}, {
			title: '添加时间',
			dataIndex: 'addtime',
		}, {
			title: '更新时间',
			dataIndex: 'updatetime',
		}]

		const rowSelection = {
			onChange: (selectedRowKeys, selectedRows) => {
				console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
			},
			getCheckboxProps: record => ({
				disabled: record.name === 'Disabled User',
			}),
		};

		return (
			<Spin tip="Loading..." spinning={ this.loading }>
				<Table rowSelection={ rowSelection } columns={ columns } dataSource={ this.state.list } rowKey="id" />
			</Spin>
		)
	}
}

export default Article
