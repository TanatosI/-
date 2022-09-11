<template>
  <div>
    <article-item v-for="item in articles" :article="item" :key="item.art_id"></article-item>
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
      articles: []
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
    }
  }
}
</script>
<style lang=""></style>
