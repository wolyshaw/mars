import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { closePopup, openPopup } from 'actions/popups'
import Login from 'components/popups/Login'

import styles from 'static/popups/popup.less'

const mapStateToProps = state => ({
	Popups: state.Popups
})

const setClose = (dispatch, callback) => {
	dispatch(closePopup())
	if (callback && typeof callback === 'function') {
		callback()
	}
}

const active = p => {
	let pop = p.Popups,
		name = ('' + pop.name).toLocaleUpperCase()
	switch (name) {
		case 'LOGIN':
			return <Login data={ pop.data } close={ () => setClose(p.dispatch) } dispatch={ p.dispatch }/>
			break
		default:
			return ''
	}
}

const Popup = props => {
	let Active = active(props)
	return (
		<span>
			{ Active }
		</span>
	)
}

export default connect(
	mapStateToProps
)(Popup)
