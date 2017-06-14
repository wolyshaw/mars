import { combineReducers } from 'redux'
import Popups from './popups'
import User from './user'
import Token from './token'

const reducers = {
	User,
	Popups,
	Token
}

export default combineReducers(reducers)
