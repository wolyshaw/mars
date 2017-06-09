import { combineReducers } from 'redux'
import Popups from './popups'
import User from './user'

const reducers = {
	User,
	Popups
}

export default combineReducers(reducers)
