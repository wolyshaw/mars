const User = (state = {}, action) => {
	switch (action.type) {
		case 'set_user':
			return action.data
			break
		default:
			return state
	}
}

export default User
