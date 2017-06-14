import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import store from '../reducers'
const middleware = [thunk]
const appStore = createStore(
	store,
	applyMiddleware(...middleware)
)

export default appStore
