import axios from 'axios'
import {
  Message
} from 'element-ui'
const server = axios.create({
  baseURL: process.env.VUE_APP_BASEURL
  // timeout: 30000
})

// 添加请求拦截器
server.interceptors.request.use((config) => {
  console.log('在发送请求之前', config)
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
server.interceptors.response.use((response) => {
  // 对响应数据做点什么
  console.log('对响应数据', response)
  return response
}, (error) => {
  // 对响应错误做点什么
  if (/timeout/.test(error.message)) {
    message('请求超时, 请重新连接')
  }
  return Promise.reject(error)
})
let message = function(info) {
  Message({
    message: info,
    type: 'error',
    duration: 3.5 * 1000
  })
}
export default server
