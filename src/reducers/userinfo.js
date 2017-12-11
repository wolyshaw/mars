export default (state = null, action) => {
	switch (action.type) {
		case 'set_userinfo':
			return action.data
			break
		case 'clear_userinfo':
			return action.data
			break
		default:
			return state
	}
}
