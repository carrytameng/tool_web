import request from '@/assets/utils/request'
// 获取法院执行人列表
export function courtblacklist(url, param) {
  return request({
    url: url,
    method: 'GET',
    params: param
  })
}
