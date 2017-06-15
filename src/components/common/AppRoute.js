import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Bundle from 'components/common/Bundle'

const User = require('bundle-loader?lazy&name=user!components/pages/User')
const Home = require('bundle-loader?lazy&name=home!components/pages/Home')

const HomeComp = props => (
	<Bundle load={ Home } title={ 'Home' }>
		{ (Container) => <Container { ...props }/> }
	</Bundle>
)

const UserComp = props => (
	<Bundle load={ User } title={ 'User' }>
		{ (Container) => <Container { ...props }/> }
	</Bundle>
)

const AppRoute = props => {
	return (
		<div style={{ backgroundColor: '#fff', minHeight: 360, padding: 20 }}>
			<Switch>
				<Route path={ '/' } name={ 'home' } breadcrumbName={ 'home' } exact component={ HomeComp }/>
				<Route path={ '/user' } name={ 'user' } breadcrumbName={ 'user' } component={ UserComp }/>
			</Switch>
		</div>
	)
}

export default AppRoute
