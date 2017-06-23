import React, { Component } from 'react'
import { render } from 'react-dom'
import { Spin } from 'antd'
import Helmet from 'react-helmet'
import { fetchData } from 'util/util'

class ArticleContent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			item: []
		}
		this.loading = false
	}

	componentWillMount() {
		this.loading = true
		fetchData({
			url: '/manage/article/view',
			hint: false,
			body: {
				id: this.props.match.params.id
			},
			success: r => {
				this.loading = false
				this.setState({
					item: r.data
				})
			}
		})
	}

	render() {
		let item = this.state.item[0] || {}
		return (
			<Spin tip="Loading..." spinning={ this.loading }>
				<Helmet title={ item.title }/>
				ArticleContent
			</Spin>
		)
	}
}

export default ArticleContent
