import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { getUserData } from 'util/util'
import InitShow from 'components/common/InitShow'

import styles from 'static/app.less'

const history = createBrowserHistory()

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
			<Router history={ history }>
				<InitShow
					onCollapse={ this.onCollapse.bind(this) }
					collapsed={ this.state.collapsed }
					mode={ this.state.mode }
					main={ this.props }
				/>
			</Router>
		)
	}
}

export default connect(
	mapStateToProps
)(Main)
