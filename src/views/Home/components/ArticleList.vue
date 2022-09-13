<template>
  <div class="article">
    <van-pull-refresh v-model="refreshLoading" @refresh="getNextPageArticle">
      <van-list
        v-model="loading"
        @load="getNextPageArticle"
        offset="100"
        :immediate-check="false"
        :finished="finished"
        :error.sync="error"
        error-text="出错了，点击刷新"
        finished-text="没有更多文章了~~"
      >
        <article-item
          v-for="item in articles"
          :article="item"
          :key="item.art_id"
        ></article-item>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
// 发送请求 拿到当前问斩固定详情数据
import { getArtickes } from '@/api'
import ArticleItem from './ArtcleItem.vue'
export default {
  name: 'ArticleList',
  components: { ArticleItem },
  props: {
    id: [String, Number]
  },
  data() {
    return {
      articles: [],
      preTimeStamp: '',
      loading: false,
      finished: false,
      error: false,
      refreshLoading: false
    }
  },
  created() {
    this.getFirstPageArticle()
  },
  methods: {
    async getFirstPageArticle() {
      try {
        const { data } = await getArtickes(this.id, +new Date())
        //   console.log(data)
        this.articles = data.data.results

        // 保存时间戳
        this.preTimeStamp = data.data.pre_timestamp
      } catch (error) {
        const status = error.response?.status
        if (!error.response || status === 507) {
          throw error
        } else {
          if (status === 400) {
            throw new Error(error.response.data.message)
          }
        }
      }
    },
    async getNextPageArticle() {
      try {
        console.log('获取下一页数据')
        const { data } = await getArtickes(this.id, this.preTimeStamp)
        if (!data.data.pre_timestamp) {
          this.finished = true
        }
        if (this.refreshLoading) {
          this.articles.unshift(...data.data.results)
        } else {
          this.articles.push(...data.data.results)
        }
        this.preTimeStamp = data.data.pre_timestamp
      } catch (error) {
        this.crror = true
      } finally {
        this.loading = false
        this.refreshLoading = false
      }
    }
  }
}
</script>
<style scoped lang="less">
// 如何给盒子拥有自己的滚动条
// - 1.定高 2.overflow:auto/scroll/overlay
.article {
  height: calc(100vh - 92px - 83px - 100px);
  overflow: auto;

  // &: 代表当前元素他爹
  // ::-webkit-scrollbar : 滚动槽
  // ::-webkit-scrollbar-thumb: 滚动的滑块
  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #3296fa;
    border-radius: 10px;
  }
}
</style>
