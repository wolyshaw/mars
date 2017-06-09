const popup = (state = {}, action) => {
	switch (action.type) {
		case 'set_popups':
			return action.data
			break
		default:
			return {}
	}
}

export default popup
