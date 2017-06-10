import React, { Component } from 'react'
import { render } from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import store from './reducers'

import Main from 'containers/Main'

import 'antd/dist/antd.less'

const middleware = [thunk]

const appStore = createStore(
  store,
  applyMiddleware(...middleware)
)

render(
  <Provider store={appStore}>
    <Main/>
  </Provider>,
  document.getElementById('app')
)
