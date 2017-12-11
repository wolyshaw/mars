import React, { PureComponent } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Icon, Table, Col, Row } from 'antd'
import { connect } from 'react-redux'
import Bundle from '../elements/Bundle'
import Content from './Content'
import ContentArticle from './Content/Article'
import User from './User'
import Dashboard from './Dashboard'
import System from './System'
import Login from './Login'
// import DashboardLazy from 'bundle-loader?lazy&name=Dashboard!./Dashboard'
// import ContentLazy from 'bundle-loader?lazy&name=Content!./Content'
// import SystemLazy from 'bundle-loader?lazy&name=System!./System'
// import UserLazy from 'bundle-loader?lazy&name=User!./User'
// import LoginLazy from 'bundle-loader?lazy&name=Login!./Login'

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

// const System = props => (
// 	<Bundle load={ SystemLazy }>
// 		{ (Container) => <Container { ...props }/> }
// 	</Bundle>
// )

// const Login = props => (
// 	<Bundle load={ LoginLazy }>
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

const PrivateRoute = connect(({userinfo}) => ({userinfo}))((option) => {
  console.log(option.userinfo)
  let Component = option.Component
  return (
  <Route { ...option } render={props => {
    return (
      option.userinfo !== false ? (
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
      <PrivateRoute exact path='/' Component={ Dashboard }/>
      <PrivateRoute exact path='/dashboard' Component={ Dashboard }/>
      <PrivateRoute exact path='/content' Component={ Content }/>
      <PrivateRoute exact path='/content/article' Component={ ContentArticle }/>
      <PrivateRoute exact path='/user' Component={ User }/>
      <PrivateRoute exact path='/system' Component={ System }/>
      <Route exact path='/login' component={ Login }/>
      <PrivateRoute Component={ NotFound }/>
    </Switch>
  )
}
