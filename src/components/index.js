import React, { PureComponent } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { dispatch } from 'util/store'
import { setUserInfo } from 'actions/user/userinfo'
import LeftMenuSider from './elements/LeftMenuSider'
import Container from './elements/Container'
import Header from './elements/Header'

class Application extends PureComponent {
  constructor(props) {
    super(...props)
    this.state = {
      menu: [],
      collapsed: false
    }
    this.toggle = this._toggle.bind(this)
  }

  _toggle() {
    this.setState({collapsed: !this.state.collapsed})
  }

  componentWillMount() {
    dispatch(setUserInfo())
  }

  render() {
    return (
      <Router>
        <Layout>
          <LeftMenuSider collapsed={ this.state.collapsed }/>
          <Layout>
            <Header userinfo={ this.props.userinfo } toggle={ this.toggle } collapsed={ this.state.collapsed }/>
            <Container/>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default connect(state => state)(Application)
