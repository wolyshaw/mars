import { openPopup } from '../components/popups'
import loading from '../components/elements/Loading'

const Loading = new loading()

export default (url, option = {}) => {

    let initBody, token = localStorage.getItem('token')
    if(option.body instanceof FormData) {
      initBody = option.body
    } else {
      initBody = JSON.stringify(
        Object.assign(
          (option.body || {})
        )
      )
      if(option.method === 'get') {
        let kv = []
        Object.entries(JSON.parse(initBody)).map(([k, v]) => kv.push(`${k}=${v}`))
        url += kv.join('&') ? '?' + kv.join('&') : ''
        initBody = undefined
      }
    }

    let headers = new Headers()

    headers.append('Token', localStorage.getItem('token'))

    let initOption = {
      method: 'post',
      body: initBody
    }
console.log(Object.assign({}, initOption, option))
    Loading.openLoading()
    return fetch(url, Object.assign({}, initOption, option))
      .then(res => {
        Loading.closeLoading()
        if(res.status === 200) {
          let json = res.json()
          if(json.code === 100) {
            openPopup({name: 'login'})
          } else {
            return json
          }
        }
      })
      .catch(error => Loading.closeLoading())

  }
