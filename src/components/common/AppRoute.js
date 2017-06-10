import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Bundle from 'components/common/Bundle'

const User = require('bundle-loader?lazy&name=[user]!components/pages/User')
const Home = require('bundle-loader?lazy&name=[home]!components/pages/Home')

const HomeComp = props => (
  <Bundle load={ Home }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

const UserComp = props => (
  <Bundle load={ User }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

const AppRoute = props => {
  return (
    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
      <Route path={ '/' } exact component={ HomeComp }/>
      <Route path={ '/user' } component={ UserComp }/>
    </div>
  )
}

export default AppRoute
