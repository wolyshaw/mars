import loading from '../components/elements/Loading'

const Loading = new loading()

export default (url, option = {}) => {

    let initBody, ssid = localStorage.getItem('ssid')
    if(option.body instanceof FormData) {
      initBody = option.body
      initBody.append('ssid', ssid)
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
      body: initBody
    }

    Loading.openLoading()
    return fetch(url, Object.assign({}, initOption, option))
      .then(res => {
        Loading.closeLoading()
        if(res.status === 200) {
          return res.json()
        }
      })
      .catch(error => Loading.closeLoading())

  }
