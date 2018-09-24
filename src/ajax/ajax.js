import axios from 'axios'

function ajax (url, data = {}, methods = 'GET') {
  return new Promise((resolve, reject) => {
    if (methods.toUpperCase() === 'GET') {
      let dataStr = ''
      for (let n in data) {
        dataStr += n + '=' + data[n] + '&'
      }
      if (dataStr) {
        dataStr = dataStr.slice(0, -1)
        url += '?' + dataStr
      }
      axios.get(url)
        .then(res => {
          resolve(res.data)
        })
        .catch(res => {
          reject(res)
        })
    } else if (methods.toUpperCase() === 'POST') {
      axios.post(url, data)
        .then(res => {
          resolve(res.data)
        })
        .catch(res => {
          reject(res)
        })
    }
  })
}

export default ajax
