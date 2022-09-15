<template lang="">
  <div>
    <van-cell v-for="(item, index) in suggestions" :key="index" icon="search"
    @click="$emit('change-keywords' , suggestions[index])"

    >
      <template #title>
        <span v-html="item"></span>
      </template>
    </van-cell>
  </div>
</template>
<script>
// 动态正则 new RegExp(字符串, 修饰符'ig)

// new RegExp(字符串, 修饰符'ig)
import { debounce } from 'lodash'
import { getSuggestionsAPI } from '@/api'
export default {
  props: {
    keywords: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      suggestions: []
    }
  },
  watch: {
    keywords: {
      immediate: true,
      handler: 'getSuggestions'
    }
  },
  computed: {
    highLightSuggerstions() {
      const reg = new RegExp(this.keywords, 'ig')
      return this.suggestions.map((str) => {
        return str.replace(
          reg,
          (match) => `<span style="color:red">${match}}</span>`
        )
      })
    }
  },
  methods: {
    getSuggestions: debounce(async function () {
      try {
        const { data } = await getSuggestionsAPI(this.keywords)
        //   console.log(data)
        //  this.suggestions = data.data.options.filter((item) => Boolean(item))
        this.suggestions = data.data.options.filter(Boolean)
        // 过滤数组中所有的假值， 即不存在的值 如 空 NAN underneath null
      } catch (error) {
        if (error.response) {
          this.$toast.fail('暂无搜索内容')
        } else {
          throw error
        }
      }
    }, 300)
  }
}
</script>
<style lang=""></style>
