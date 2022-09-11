// 根据后端接口划分接口文档
import request from '@/utils/request'
/**
 *
 * @param {String} mobile  手机号
 * @param {Number} code  验证码
 * @returns params
 */
export const loginApi = (mobile, code) => {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}
/**
 * 验证码接口
 * @param {手机号} mobile 手机号
 * @returns params
 */
export const getSendCodeApi = (mobile) => {
  return request({
    url: `/v1_0/sms/codes/${mobile}`
  })
}
/**
 * 获取用户信息
 * @returns params
 */
export const getUserInfo = () => {
  return request({
    url: '/v1_0/user/'
  })
}
