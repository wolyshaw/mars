import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { getUserData } from 'util/util'
import InitShow from 'components/common/InitShow'

import styles from 'static/app.less'

const mapStateToProps = state => {
	return {
		popups: state.Popups,
		user: state.User,
		token: state.Token
	}
}

class Main extends Component {
	constructor(props) {
		super(props)

		this.state = {
			collapsed: false,
			mode: 'inline'
		}

		this.onCollapse = (collapsed) => {
			this.setState({
				collapsed,
				mode: collapsed ? 'vertical' : 'inline'
			})
		}
	}

	componentWillMount() {
		getUserData()
	}

	render() {
		return (
			<BrowserRouter>
				<InitShow
					onCollapse={ this.onCollapse.bind(this) }
					collapsed={ this.state.collapsed }
					mode={ this.state.mode }
					main={ this.props }
				/>
			</BrowserRouter>
		)
	}
}

export default connect(
	mapStateToProps
)(Main)
