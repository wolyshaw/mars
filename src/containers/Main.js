import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { closePopup, openPopup } from 'actions/popups'
import Popups from 'containers/Popups'
import User from 'components/pages/User'
import Home from 'components/pages/Home'
import LeftMenu from 'components/common/LeftMenu'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import createBrowserHistory from 'history/createBrowserHistory'

import styles from 'static/app.less'

const history = createBrowserHistory()

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu
const mapStateToProps = state => {
  return {
    popups: state.Popups,
    user: state.User
  }
}

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsed: false,
      mode: 'inline'
    }

    this.onCollapse = (collapsed) => {
      this.setState({
        collapsed,
        mode: collapsed ? 'vertical' : 'inline'
      })
    }
  }

  componentWillMount() {
    if (!this.props.user.id) {
      this.props.dispatch(openPopup({ name: 'login', data: {} }))
    }
  }

  render() {
    return (
      <Router history={ history }>
        <Layout className={ styles.main }>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <LeftMenu mode={ this.state.mode }/>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <div>
                <Breadcrumb style={{ margin: '12px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  <Route path={ '/' } exact component={ Home }/>
                  <Route path={ '/user' } component={ User }/>
                </div>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
          <Popups/>
        </Layout>
      </Router>
    )
  }
}

export default connect(
  mapStateToProps
)(Main)
