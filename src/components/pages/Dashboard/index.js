import React, { PureComponent } from 'react'
import loading from '../../elements/Loading'

const Loading = new loading()

export default class Dashboard extends PureComponent {
  constructor(props) {
    super(...props)
  }

  render() {
    console.log(Loading)
    return (
      <div onClick={() => Loading.openLoading()}>Dashboard</div>
    )
  }
}
