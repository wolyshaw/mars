import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

import styles from 'static/app.less'

const mapStateToProps = state => ({
	PopupsName: state.Popups.name,
	// PopupsName: state.Panels.name,
	// PopupsName: state.Photo.name
})

const Shade = props => {
	let { PopupsName } = props
	return (
		<span className={ [styles.shade, (PopupsName ? styles.active : '')].join(' ') }></span>
	)
}

export default connect(
	mapStateToProps
)(Shade)
