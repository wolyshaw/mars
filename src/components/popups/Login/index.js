import React, { PureComponent } from 'react'
import { openPopup } from '../index'

export default class Login extends PureComponent {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <div onClick={ () => openPopup({name: 'test'}) } style={{width: '500px', height: '900px', backgroundColor: '#fff'}}>
        login
      </div>
    )
  }
}
