import { message } from 'antd'
import Fetch from 'util/fetch'

export const clearToken = callback => {
	localStorage.removeItem('token')
	message.success('退出成功', 5)
	if (callback && typeof callback === 'function') {
		callback()
	}
	return { type: 'clear_token' }
}

export const setToken = data => {
	localStorage.setItem('token', data)
	return { type: 'set_token', data }
}

export const setUserInfo = () => {
  return dispatch => {
    return Fetch('/api/userinfo', { method: 'get', hint: true })
      .then(data => dispatch(({ type: 'set_userinfo', data })))
  }
}
