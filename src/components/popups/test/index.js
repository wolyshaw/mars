import React, { PureComponent } from 'react'

export default class Test extends PureComponent {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <div onClick={ () => console.log(1) } style={{width: '100px', height: '200px', backgroundColor: '#fff'}}>
        login
      </div>
    )
  }
}
