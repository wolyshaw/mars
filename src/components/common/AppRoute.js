import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Bundle from 'components/common/Bundle'

const UserLazy = require('bundle-loader?lazy&name=user!components/pages/User')
const HomeLazy = require('bundle-loader?lazy&name=home!components/pages/Home')
const ArticleLazy = require('bundle-loader?lazy&name=article!components/pages/Article')
const ArticleContentLazy = require('bundle-loader?lazy&name=articleContent!components/pages/ArticleContent')

const Home = props => (
	<Bundle load={ HomeLazy } title={ 'Home' }>
		{ (Container) => <Container { ...props }/> }
	</Bundle>
)

const User = props => (
	<Bundle load={ UserLazy } title={ 'User' }>
		{ (Container) => <Container { ...props }/> }
	</Bundle>
)

const Article = props => (
	<Bundle load={ ArticleLazy } title={ 'Article' }>
		{ (Container) => <Container { ...props }/> }
	</Bundle>
)

const ArticleContent = props => (
	<Bundle load={ ArticleContentLazy } title={ 'ArticleContent' }>
		{ (Container) => <Container { ...props }/> }
	</Bundle>
)

const AppRoute = props => {
	return (
		<div style={{ backgroundColor: '#fff', minHeight: 360, padding: 20 }}>
			<Switch>
				<Route path={ '/' } exact component={ Home }/>
				<Route path={ '/user/list' } component={ User }/>
				<Route path={ '/article/list' } component={ Article }/>
				<Route path={ '/article/:id' } component={ ArticleContent }/>
			</Switch>
		</div>
	)
}

export default AppRoute
