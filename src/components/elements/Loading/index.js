import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import styles from  './index.less'
console.log(styles)
const LoadingContent = props => {
  return (
    <div className={ styles.loadingContainer }>
      <div>
        <div className={ styles.loadingWhirlpool }></div>
      </div>
    </div>
  )
}

export default class Loading {
  constructor() {
    this.cont = 0
    this.warper = document.createElement('div')
  }

  openLoading() {
    this.cont = this.cont ++
    render(<LoadingContent/>, this.warper)
    document.body.appendChild(this.warper)
  }

  closeLoading() {
    if(this.cont === 0) {
      this.warper.style.display = 'none'
    } else {
      this.cont = this.cont --
    }
  }
}
