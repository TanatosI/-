// r新闻相关

import request from '@/utils/request'

/**
 *
 * @param {String | Number } id // 频道id
 * @param {Number} timestamp //请求 新的推荐数据当前时间戳
 * @returns
 */
export const getArtickes = (id, timestamp) => {
  return request({
    url: 'v1_0/articles',
    params: {
      channel_id: id,
      timestamp
    }
  })
}
