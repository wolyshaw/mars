import { combineReducers } from 'redux'
import Popups from './popups'
import User from './user'
import userinfo from './userinfo'
import Token from './token'

const reducers = {
	User,
	userinfo,
	Popups,
	Token
}

export default combineReducers(reducers)
