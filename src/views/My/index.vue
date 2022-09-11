<template>
  <div class="profile">
    <!-- 头部 -->
    <header>
      <!-- 登陆状态的头部 -->
      <div class="login banner" v-if="isLogin">
        <van-row></van-row>
        <van-row>
          <van-col span="12">
            <van-row
              type="flex"
              style="height: 100%"
              justify="space-around"
              align="center"
            >
              <van-image
                round
                width="1.5rem"
                height="1.5rem"
                :src="userInfo.photo"
              />
              <span class="mobile">{{userInfo.name}}</span>
            </van-row>
          </van-col>
          <van-col span="7"></van-col>
          <van-col span="5">
            <van-row type="flex" justify="center" height="100%">
              <van-button round size="mini" style="margin-top: 25%"
                >编辑按钮</van-button
              >
            </van-row>
          </van-col>
        </van-row>
        <van-row>
          <van-grid class="grid" :border="false">
            <van-grid-item icon="photo-o" text="头条">
              <template #icon>{{userInfo.art_count}}</template>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="粉丝">
              <template #icon>{{userInfo.fans_count}}</template>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="关注">
              <template #icon>{{userInfo.follow_count}}</template>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="获赞">
              <template #icon>{{userInfo.like_count}}</template>
            </van-grid-item>
          </van-grid>
        </van-row>
      </div>
      <!-- 未登录状态的头部 -->
      <div class="logout banner" v-else @click="$router.push('/login')">
        <img src="@/assets/images/mobile.png" alt="" />
        <span class="text">注册 / 登陆</span>
      </div>
    </header>
    <!-- 主体 -->
    <main>
      <van-grid column-num="2" clickable>
        <van-grid-item text="收藏">
          <template #icon>
            <span class="toutiao toutiao-shoucang"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="历史">
          <template #icon>
            <span class="toutiao toutiao-lishi"></span>
          </template>
        </van-grid-item>
      </van-grid>
      <div class="link">
        <van-cell title="消息通知" is-link />
        <van-cell title="小智同学" is-link />
      </div>
    </main>
    <!-- 底部 -->
    <footer v-if="isLogin">
      <van-button block @click="logout">退出</van-button>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { getUserInfo } from '@/api'
export default {
  data() {
    return {
      userInfo: {}
    }
  },
  computed: {
    ...mapGetters(['isLogin'])
  },
  created() {
    this.getUserInfoApi()
  },
  methods: {
    ...mapMutations(['SET_TOKEN']),
    logout() {
      this.$dialog
        .confirm({
          message: '退出该账号'
        })
        .then(() => {
          // on confirm
          this.SET_TOKEN({})
        })
    },
    // 请求用户信息
    async getUserInfoApi() {
      try {
        if (!this.isLogin) return
        const { data } = await getUserInfo()
        console.log(data)
        this.userInfo = data.data
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$toast.fail('用户认证失败，请重新登陆')
        } else {
          throw error
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.profile {
  height: 100vh;
  background-color: #f5f7f9;
  .link {
    padding: 10px 0;
  }
  .toutiao {
    font-size: 40px;
  }
  .toutiao-shoucang {
    color: red;
  }
  .toutiao-lishi {
    color: orange;
  }
}
.banner {
  width: 100%;
  height: 5.33333rem;
  background: url(@/assets/images/banner.png) no-repeat 0 0 / cover;
}
.logout {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    width: 1.76rem;
    height: 1.76rem;
  }
  .text {
    font-size: 30px;
    color: #fff;
  }
}
.login {
  display: flex;
  flex-direction: column;
  > .van-row {
    flex: 1;
  }
  .mobile {
    font-size: 30px;
    color: #fff;
  }
  .van-col {
    height: 100%;
  }
  .edit-btn {
    width: 1.6rem;
    height: 0.42667rem;
    color: #666;
  }
}
:deep(.grid) {
  .van-grid-item__content {
    background-color: transparent;
    font-size: 30px;
    color: #fff;
    .van-grid-item__text {
      color: #fff;

      font-size: 30px;
    }
  }
}
</style>
