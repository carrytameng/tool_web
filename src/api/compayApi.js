import request from '@/assets/utils/request'
// 获取企业信息
export function compayInfor(param) {
  return request({
    url: `/company`,
    method: 'GET',
    params: param
  })
}
