export const clearToken = callback => {
	if (callback && typeof callback === 'function') {
		callback()
	}
	localStorage.removeItem('token')
	return { type: 'clear_token' }
}

export const setToken = data => {
	localStorage.setItem('token', data)
	return { type: 'set_token', data }
}
