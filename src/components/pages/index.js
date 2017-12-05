import React, { PureComponent } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Icon, Table, Col, Row } from 'antd'
import { connect } from 'react-redux'
import Bundle from '../elements/Bundle'
import Content from './Content'
import User from './User'
import Dashboard from './Dashboard'
import System from './System'
import Login from './Login'
// import DashboardLazy from 'bundle-loader?lazy&name=Dashboard!./Dashboard'
// import ContentLazy from 'bundle-loader?lazy&name=Content!./Content'
// import UserLazy from 'bundle-loader?lazy&name=User!./User'

// const Dashboard = props => (
// 	<Bundle load={ DashboardLazy }>
// 		{ (Container) => <Container { ...props }/> }
// 	</Bundle>
// )

// const Content = props => (
// 	<Bundle load={ ContentLazy }>
// 		{ (Container) => <Container { ...props }/> }
// 	</Bundle>
// )

// const User = props => (
// 	<Bundle load={ UserLazy }>
// 		{ (Container) => <Container { ...props }/> }
// 	</Bundle>
// )

const NotFound = props => {
  return (
    <div>
      <Icon type="frown-o" style={{ fontSize: 16, color: '#08c' }} />
      <span> {`${props.history.location.pathname} 404 Not Found`}</span>
    </div>
  )
}

const PrivateRoute = connect(state => state)((option) => {
  let { component: Component } = option
  option.component = undefined
  return (
  <Route { ...option } render={props => {
    console.log(props, 'aass')
    return (
      option.userinfo ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )
  }}/>
)})

export default props => {
  return (
    <Switch>
      <Route exact path='/' component={ Dashboard }/>
      <Route exact path='/content' component={ Content }/>
      <Route exact path='/user' component={ User }/>
      <PrivateRoute exact path='/system' component={ System }/>
      <Route exact path='/login' component={ Login }/>
      <Route component={ NotFound }/>
    </Switch>
  )
}
