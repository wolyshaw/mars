import React, { PureComponent } from 'react'
import { openPopup } from '../index'

export default class Login extends PureComponent {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <div onClick={ () => openPopup({name: 'test'}) } style={{height: '100%', backgroundColor: '#fff'}}>
        login
      </div>
    )
  }
}
