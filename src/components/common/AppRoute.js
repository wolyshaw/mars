import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import User from 'components/pages/User'
import Home from 'components/pages/Home'

const AppRoute = props => {
  return (
    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
      <Route path={ '/' } exact component={ Home }/>
      <Route path={ '/user' } component={ User }/>
    </div>
  )
}

export default AppRoute
