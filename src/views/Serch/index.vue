<template>
  <div>
    <!--  搜索框  -->
    <form action="">
      <van-search
        v-model="keywords"
        show-action
        @cancel="$router.push('/')"
        background="#3197f8"
        placeholder="请输入搜索关键词"
        style="color: #fff"
        @search="onSearch"
        @focus="isShowSearchResult = false"
      />
    </form>
    <!-- 搜索 历史/ 建议 / 结果 -->
    <component
      :keywords="keywords"
      :is="componentName"
      @change-keywords="onSearch"
    ></component>
  </div>
</template>

<script>
import SearchHistoty from './components/SearchHistory.vue'
import SearchSuggestion from './components/SearchSuggestion.vue'
import SearchResult from './components/SearchResult.vue'
export default {
  components: {
    SearchHistoty,
    SearchSuggestion,
    SearchResult
  },
  data() {
    return {
      keywords: '',
      isShowSearchResult: false
    }
  },
  computed: {
    componentName() {
      if (this.keywords === '') {
        return 'SearchHistoty'
      }
      if (this.isShowSearchResult) {
        return 'SearchResult'
      }
      return 'SearchSuggestion'
    }
  },
  methods: {
    onSearch(keywords) {
      // 存储搜索历史
      const distinctHistories = [...new Set([keywords, ...this.histries])]
      this.SET_HISTORIES(distinctHistories)

      this.keywords = keywords
      this.isShowSearchResult = true
    }
  }
}
</script>
<style lang="less" scoped></style>
