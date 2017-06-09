import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { closePopup, openPopup } from 'actions/popups'
import Login from 'components/popups/Login'

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
			return <Login data={ pop.data } close={ () => setClose(p.dispatch) }/>
			break
		default:
			return 'init'
	}
}

const Popup = props => {
	return (
		<span>
			<span onClick={ () => props.dispatch(openPopup({ name: 'login', data: {}})) }>openLogin</span>
			{ active(props) }
		</span>
	)
}

export default connect(
	mapStateToProps
)(Popup)
