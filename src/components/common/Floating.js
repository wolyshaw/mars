import React, { Component } from 'react'
import { render } from 'react-dom'
import Popups from 'containers/Popups'
import Shade from 'containers/Shade'

const Floating = props => {
	return (
		<span>
			<Shade/>
			<Popups/>
		</span>
	)
}

export default Floating
