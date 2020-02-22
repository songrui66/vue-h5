// axios 官网参考
// https://www.kancloud.cn/yunye/axios/234845
// yarn add axios
import axios from 'axios'
import store from './../store'
import V from './../main.js'
// const env = process.env.NODE_ENV === 'production' ? '/cop/api' : ''
const service = axios.create({
  baseURL: '/',
  timeout: 20000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})

function SERVER (options) {
  const headers = options.headers || {'Content-Type': 'application/json'}
  store.dispatch('openLoading')
  return new Promise((resolve, reject) => {
    service({
      url: options.url,
      params: options.params,
      data: options.data,
      method: options.method,
      headers
    }).then(data => {
      store.dispatch('closeLoading')
      resolve(data)
    }).catch(err => {
      store.dispatch('closeLoading')
      reject(err)
    })
  })
}

function GET (url, params) {
  store.dispatch('openLoading')
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params, timeout: 60000
    }).then(response => {
      store.dispatch('closeLoading')
      resolve(response)
    }).catch(err => {
      store.dispatch('closeLoading')
      V.$vux.tost.show({
        text: '网络繁忙',
        type: 'text'
      })
      reject(err)
    })
  })
}

function POST (url, data) {
  store.dispatch('openLoading')
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      timeout: 60000
    }).then(response => {
      store.dispatch('closeLoading')
      resolve(response)
    }).catch(err => {
      store.dispatch('closeLoading')
      V.$vux.tost.show({
        text: '网络繁忙',
        type: 'text'
      })
      reject(err)
    })
  })
}

export default {
  GET, POST, SERVER
}
