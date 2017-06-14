import fetch from 'isomorphic-fetch'
import { message, Button } from 'antd'
import appStore from 'util/store'
import { setUser, clearUser } from 'actions/user'
import { openPopup } from 'actions/popups'

const {
	dispatch,
	getState
} = appStore

export const syncToken = () => getState().Token || localStorage.getItem('token')

export const fetchData = set => {
	let { Token } = getState()
	let body = set.body || {}
	let Hint = set.hint !== false && set.hint === undefined
	body.token = syncToken()
	fetch(set.url, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	})
		.then(res => res.json())
		.then(r => {
			if (r.code === '200') {
				if (Hint) {
					message.success(r.msg, 5)
				}
				if (set.success && typeof set.success === 'function') {
					set.success(r)
				}
			} else {
				if (Hint) {
					message.error(r.msg, 5)
				}
				if (r.code === '100') {
					dispatch(clearUser())
					dispatch(openPopup({ name: 'login' }))
				}
			}
		})
		.catch(err => message.error(err, 5))
}

export const getUserData = callback => {
	fetchData({
		url: '/manage/user/info',
		hint: false,
		success: r => dispatch(setUser(r.data))
	})
}

export default {}
