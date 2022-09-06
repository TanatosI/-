<template>
  <div>
    <van-nav-bar title="标题" class="nac-bar" />

    <van-form @submit="onSubmit" class="from">
      <van-field
        v-model="mobile"
        name="手机号"
        placeholder="请输入手机号"
        :rules="[
          { required: true, message: '请填写手机号' },
          {
            pattern:
              /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,
            message: '手机格式错误'
          }
        ]"
      >
        <template #label>
          <span class="toutiao toutiao-shouji"></span>
        </template>
      </van-field>
      <van-field
        v-model="code"
        name="密码"
        placeholder="请输入验证码"
        :rules="[
          { required: true, message: '请填写验证码' },
          { pattern: /[0-9]{6}/, message: '验证码格式错误' }
        ]"
      >
        <template #label>
          <span class="toutiao toutiao-yanzhengma"></span>
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      mobile: '',
      code: ''
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>
<style scoped lang="less">
// scoped 样式只作用于担当起的组件，所以组件里的组件样式无法更改
.nac-bar {
  background-color: #3296fa;
  // vue 提供了深度选择器 :deep() 就可以进行深度更改
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
}
:deep(.from) {
  .van-cell__title {
    flex: 1;
  }
  .van-cell__value {
    flex: 20;
  }
  .toutiao {
    font-size: 40px;
  }
}
</style>
