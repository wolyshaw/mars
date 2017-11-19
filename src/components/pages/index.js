import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Icon } from 'antd'
import Bundle from '../elements/Bundle'

const DashboardLazy = require('bundle-loader?lazy&name=Dashboard!./Dashboard')
const ContentLazy = require('bundle-loader?lazy&name=Content!./Content')

const Dashboard = props => (
	<Bundle load={ DashboardLazy }>
		{ (Container) => <Container { ...props }/> }
	</Bundle>
)

const Content = props => (
	<Bundle load={ ContentLazy }>
		{ (Container) => <Container { ...props }/> }
	</Bundle>
)

const NotFound = props => {
  return (
    <div>
      <Icon type="frown-o" style={{ fontSize: 16, color: '#08c' }} />
      <span> {`${props.history.location.pathname} 404 Not Found`}</span>
    </div>
  )
}

export default props => {
  return (
    <Switch>
      <Route exact path='/' component={ Dashboard }/>
      <Route exact path='/content' component={ Content }/>
      <Route component={ NotFound }/>
    </Switch>
  )
}
