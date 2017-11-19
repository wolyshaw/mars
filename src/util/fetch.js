export default (url, option = {}) => {

    let initBody, ssid = localStorage.getItem('ssid')
    if(option.body instanceof FormData) {
      initBody = option.body
      initBody.append('ssid', ssid)
    } else {
      initBody = JSON.stringify(
        Object.assign(
          {ssid: ssid},
          (option.body || {})
        )
      )
    }

    let initOption = {
      method: 'post',
      body: initBody
    }

    return fetch(`${urk}?ssid=${ssid}`, Object.assign({}, initOption, option))
      .then(res => {
        if(res.status === 200) {
          return res.json()
        }
      })
      .catch(error => console.log(error))

  }
