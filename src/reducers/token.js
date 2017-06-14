const Token = (state, action) => {
	switch (action.type) {
		case 'set_token':
			return action.data
			break
		default:
			return null
	}
}

export default Token
