import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { closePopup, openPopup } from 'actions/popups'

import { message } from 'antd'

import Popups from 'containers/Popups'

const mapStateToProps = state => {
  return {
    popups: state.Popups,
    user: state.User
  }
}

class Main extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if (!this.props.user.id) {
      this.props.dispatch(openPopup({ name: 'login', data: {} }))
    }
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            aaaaa
          </div>
        </Router>
        <Popups/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Main)
