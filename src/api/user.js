// user.js 划分是根后端接口文档
import request from '@/utils/request'

/**
 *
 * @param {String} mobile
 * @param {Number} code
 * @returns Promise
 */

// 登录页面
export const lohin = (mobile, code) => {
  return request({
    url: '/v1_0/authorizations',
    method: 'POST',
    data: {
      mobile,
      code
    }
  })
}

/**
 *
 * @param {String} mobile 手机号
 * @returns Promise
 */
export const sendCodeAPI = (mobile) => {
  return request({
    url: `/v1_0/sms/cpdes/${mobile}`
  })
}
