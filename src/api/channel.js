// 所有关于频道的接口

import request from '@/utils/request'

/**
 * 获取自己频道
 * @returns Promise
 */
export const getChannelAPI = () => {
  return request({
    url: '/v1_0/user/channels'
  })
}

/**
 * 获取所有频道
 * @returns Promise
 */
export const getAllChannelsAPI = () => {
  return request({
    url: '/v1_0/channels'
  })
}

/**
 *删除频道
 *@param { Number / String } id 频道的id
 * @returns Promise
 */
export const delChanne1API = (id) => {
  return request({
    url: `/V1_O/user/ channels/${id}`,
    method: 'DELETE'
  })
}

/**
 *新增频道
 *@param {String|Number} id 新增频道的id
 *@param {Number} seq新增频道添加的索引值
 *@neturns Promise
 */
export const addchannelAPI = (id, seq) => {
  return request({
    url: '/v1_0/user/channels',
    method: 'PATCH',
    data: {
      channels: [{ id, seq }]
    }
  })
}
