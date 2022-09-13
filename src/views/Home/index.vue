<template>
  <div>
    <!-- 搜索框 -->
    <van-nav-bar class="navbar">
      <template #title>
        <van-button icon="search" size="small" round block></van-button>
      </template>
    </van-nav-bar>
    <!-- 频道及文章展示 -->
    <!-- active:高亮的tab的索引-->
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="item in Channels" :key="item.id" :title="item.name">
        <!-- 文章 -->
        <article-list :id="item.id"></article-list>
      </van-tab>
      <span class="toutiao toutiao-gengduo" @click="isShow = true"></span>
    </van-tabs>

    <!-- 弹出层 -->
    <van-popup
      v-model="isShow"
      position="bottom"
      :style="{ height: '100%' }"
      closeable
      close-icon-position="top-left"
    >
      <ChanneleList
        :myChannels="Channels"
        @change-active=";[(isShow = false), (active = $event)]"
      ></ChanneleList>
    </van-popup>
  </div>
</template>

<script>
import { getChannelAPI } from '@/api'

import ChanneleList from './components/ChannelEdit.vue'
import ArticleList from './components/ArticleList.vue'
export default {
  components: {
    ArticleList,
    ChanneleList
  },
  data() {
    return {
      active: 0,
      Channels: [],
      isShow: false
    }
  },
  created() {
    this.getChannel()
  },
  methods: {
    async getChannel() {
      try {
        const { data } = await getChannelAPI()
        // console.log(data)
        this.Channels = data.data.channels
      } catch (error) {
        if (!error.response) {
          throw error
        } else {
          const status = error.response.status
          status === 507 ?? this.$toast.fail('服务器异常')
        }
      }
    }
  }
}
</script>
<style scoped lang="less">
.navbar {
  background-color: #3296fa;

  // inherit 继承
  // unset 不设置
  :deep(.van-nav-bar__title) {
    max-width: unset;
  }
  .van-button--default {
    background-color: #5babfb;
    border: 0;
    color: #fff;
    font-size: 30px;
  }

  .van-icon {
    color: #fff;
  }
  .van-button--block {
    width: 7.4rem;
  }
}
.toutiao-gengduo {
  position: absolute;
  top: 0;
  right: 0;
  width: 66px;
  height: 82px;
  font-size: 40px;
  line-height: 82px;
  text-align: center;
  opacity: 0.6;
  border-bottom: 1px solid #eee;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 70%;
    width: 1px;
    background-image: url('~@/assets/images/gradient-gray-line.png');
  }
}
</style>
