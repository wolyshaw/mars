import React from 'react'
import ReactDOM from 'react-dom'
import { store, openFloat, closeFloat, removeFloat } from 'react-float'
import Login from './Login'
import Test from './test'

const Store = new store({
  login: Login,
  test: Test
})

export const openPopup = openFloat(Store)
