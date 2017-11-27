import React from 'react'
import ReactDOM from 'react-dom'
import { store, openFloat, closeFloat, removeFloat } from 'react-float'
import Bundle from '../elements/Bundle'
// import Login from './Login'
// import Test from './Test'

const LoginLazy = require('bundle-loader?lazy&name=Login!./Login')
const TestLazy = require('bundle-loader?lazy&name=Test!./Test')

const Login = props => (
	<Bundle load={ LoginLazy }>
		{ (Container) => <Container { ...props }/> }
	</Bundle>
)

const Test = props => (
	<Bundle load={ TestLazy }>
		{ (Container) => <Container { ...props }/> }
	</Bundle>
)

const Store = new store({
  login: Login,
  test: Test
})

export const openPopup = openFloat(Store)
export const closePopup = closeFloat(Store)
