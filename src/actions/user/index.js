export const clearUser = callback => {
	if (callback && typeof callback === 'function') {
		callback()
	}
	return { type: 'clear_user' }
}

export const setUser = data => {
	return { type: 'set_user', data }
}
