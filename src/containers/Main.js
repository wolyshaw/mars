import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import { closePopup, openPopup } from 'actions/popups'
import Popups from 'containers/Popups'
import LeftMenu from 'components/common/LeftMenu'
import Foot from 'components/common/Foot'
import Head from 'components/common/Head'
import RouteLine from 'components/common/RouteLine'
import AppRoute from 'components/common/AppRoute'

import styles from 'static/app.less'

const history = createBrowserHistory()

const { Content, Sider } = Layout
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
            <Head/>
            <Content style={{ margin: '0 16px' }}>
              <div>
                <RouteLine/>
                <AppRoute/>
              </div>
            </Content>
            <Foot/>
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
