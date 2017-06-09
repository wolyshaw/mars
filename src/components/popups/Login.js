import React, { Component } from 'react'
import { render } from 'react-dom'

class Login extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className={ 'login' }>
				login
				<span onClick={ this.props.close }>close</span>
			</div>
		)
	}
}

export default Login
