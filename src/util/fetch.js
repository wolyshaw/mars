import { message } from 'antd'
import { openPopup } from '../components/popups'
import loading from '../components/elements/Loading'

const Loading = new loading()

export default (url, option = {}) => {

    let initBody, token = localStorage.getItem('token') || ''
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

    let initOption = {
      method: 'post',
      body: initBody,
      headers: {
        'X-token': token
      }
    }

    Loading.openLoading()
    return fetch(url, Object.assign({}, initOption, option))
      .then(res => {
        Loading.closeLoading()
        if(res.status === 200) {
          return res.json()
        }
      })
      .then(r => {
        if(r.code === 100) {
          // openPopup({name: 'login', spanStyle: {margin: 0,width: '100%', height: '100%'}})
          if(option.hint) {
            message.error('请先登录!')
          }
          return null
        } else {
          return r
        }
      })
      .catch(error => Loading.closeLoading())

  }
