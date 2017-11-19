import React, { PureComponent } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'
import LeftMenuSider from './elements/LeftMenuSider'
import Container from './elements/Container'
import Header from './elements/Header'

export default class Application extends PureComponent {
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

  render() {
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
