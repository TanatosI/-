<template>
  <div>
    <!-- {{$store.state.conust}} -->
    <!-- 头部导航 -->
    <van-nav-bar class="login-bar" title="登录" />
    <!-- form表单 -->
    <van-form @submit="onSubmit" class="from" ref="form">
      <van-field
        v-model="mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="mobileRules"
      >
        <template #label>
          <span class="toutiao toutiao-shouji"></span>
        </template>
      </van-field>
      <van-field
        v-model="code"
        name="code"
        placeholder="请输入验证码"
        :rules="codeRules"
      >
        <template #label>
          <span class="toutiao toutiao-yanzhengma"></span>
        </template>
        <template #button>
          <van-button
            v-if="isShowCodeBtn"
            block
            type="default"
            size="small"
            class="codeBth"
            round
            native-type="button"
            @click="codeSend"
            >获取验证码</van-button
          >
          <van-count-down
            v-else
            :time="60 * 1000"
            format="ss秒"
            @finish="isShowCodeBtn = true"
          />
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { mobileRules, codeRules } from './rules'
import { loginApi, getSendCodeApi } from '@/api/user'
// 引入vuex的mapMutations来储存token值  vuex是响应式
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      mobile: '',
      code: '',
      mobileRules,
      codeRules,
      isShowCodeBtn: true
    }
  },
  methods: {
    ...mapMutations(['SET_TOKEN']),
    // loading等待函数
    loading() {
      this.$toast.loading({
        message: '加载中...',
        duration: 0
      })
    },
    // 只有校验成功触发
    async onSubmit() {
      // 调用等待函数
      this.loading()
      // 请求返回成功时的函数
      try {
        const { data } = await loginApi(this.mobile, this.code)
        this.$toast.success('登陆成功')
        this.$router.push('/profile')
        this.SET_TOKEN(data.data)
        // 请求失败函数
      } catch (error) {
        if (error.response && error.response.status === 400) {
          this.$toast.fail(error.response.data.message)
        } else {
          this.$toast.clear()
          throw error.message
        }
      }
    },
    async codeSend() {
      // 点击按钮校验mobile规则
      await this.$refs.form.validate('mobile')
      this.loading()
      try {
        await getSendCodeApi(this.mobile)
        this.isShowCodeBtn = false
        this.$toast.success('发送验证成功')
      } catch (error) {
        if (
          // error.response.status后端返回的状态
          error.response &&
          (error.response.status === 429 || error.response.status === 404)
        ) {
          // loading等待不到数据弹窗
          this.$toast.fail(error.response.data.message)
        } else {
          // 清除等待
          this.$toast.clear()
          throw error
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.login-bar {
  background-color: #3296fa;
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
}
:deep(.from) {
  .van-cell__title {
    flex: 1;
  }
  .van-cell__value {
    flex: 19;
  }
  .toutiao {
    font-size: 40px;
  }
}
.codeBth {
  background-color: #eee;
  height: 0.64rem;
  color: #a58594;
}
</style>
