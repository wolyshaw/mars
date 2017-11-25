import React, { PureComponent } from 'react'
import { dispatch } from 'util/store'
import { setUserInfo } from 'actions/user/userinfo'

export default class System extends PureComponent {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <div onClick={ () => dispatch(setUserInfo())}>
        System
      </div>
    )
  }
}
