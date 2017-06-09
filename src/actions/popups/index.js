export const closePopup = callback => {
	if (callback && typeof callback === 'function') {
		callback()
	}
	return { type: 'close_popups' }
}

export const openPopup = data => {
	return { type: 'set_popups', data }
}
