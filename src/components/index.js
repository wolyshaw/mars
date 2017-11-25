import React, { PureComponent } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import LeftMenuSider from './elements/LeftMenuSider'
import Container from './elements/Container'
import Header from './elements/Header'
import { openPopup } from './popups'

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
    let { userinfo } = this.props
    if(!userinfo) {
      openPopup({name: 'login', spanStyle: {width: '100%', height: '100%', margin: 'auto'}})
    }
  }

  render() {
    console.log(this.props)
    return (
      <Router>
        <Layout>
          <LeftMenuSider collapsed={ this.state.collapsed }/>
          <Layout>
            <Header toggle={ this.toggle } collapsed={ this.state.collapsed }/>
            <Container/>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default connect(state => state)(Application)
