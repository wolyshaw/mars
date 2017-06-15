import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class Bundle extends Component {

	constructor(props) {
		super(props)
		this.state = {
			mod: null,
			title: document.title
		}
	}

	componentWillMount() {
		this.load(this.props)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.load !== this.props.load) {
			this.load(nextProps);
		}
	}

	load(props) {
		this.setState({
			mod: null
		});
		props.load((mod) => {
			this.setState({
				mod: mod.default ? mod.default : mod
			})
		})
	}

	render() {
		return (
			<span>
				<Helmet title={ this.props.title || '' }/>
				{
					this.state.mod ? this.props.children(this.state.mod) : null
				}
			</span>
		)
	}
}

Bundle.PropTypes = {
	load: PropTypes.func,
	title: PropTypes.string,
	children: PropTypes.func
}

export default Bundle
