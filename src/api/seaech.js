import request from '@/utils/request'

/**
 * 搜索建议
 * @param {*} q 关键词
 * @returns Promise
 */
export const getSuggestionsAPI = (q) => {
  return request({
    url: '/v1_0/suggestion',
    params: {
      q
    }
  })
}

/**
 * 搜索结果
 * @param {*} page 分页数量
 * @param {*} per_page 每一项数据数量
 * @param {*} q关键词
 * @returns
 */

// eslint-disable-next-line camelcase
export const getResultsAPI = (page, per_page, q) => {
  return request({
    url: '/v1_0/search',
    params: {
      page,
      per_page,
      q
    }
  })
}
