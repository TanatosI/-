<template lang="">
  <div>
    <!-- top 顶部栏 -->
    <div class="homeTop">
      <div class="topleft">
        <!-- logo 图片 -->
        <img src="../../assets/mmlogo.png" />
        <van-icon name="orders-o" />
        <span>数据概览</span>
      </div>
      <div class="topright">
        <span>
          <van-icon name="search" @click="Searchboxswitch" />
          <input
            v-model="searchvalue"
            type="text"
            v-focus
            placeholder="请输入搜索"
            v-if="Searchbox"
            @blur="losstrigger"
          />
        </span>
        <span><van-icon name="expand-o" /></span>
        <span @mouseover="ddd" @mouseout="fff">
          超级管理员
          <van-icon name="arrow-down"
        /></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Searchbox: '',
      searchvalue: ''
    }
  },
  methods: {
    Searchboxswitch() {
      if (this.Searchbox === true) {
        console.log('开始搜索')
      } else {
        this.Searchbox = true
      }
    },
    losstrigger() {
      this.Searchbox = false
      this.searchvalue = ''
    },
    ddd() {
      console.log('经过了')
    },
    fff() {
      console.log('离开了')
    }
  },
  directives: {
    focus: {
      inserted(ele, binding) {
        ele.focus()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.homeTop {
  width: 100%;
  height: 70px;
  background-image: linear-gradient(
    to right; rgba(20, 147, 250),
    rgba(1, 197, 250)
  );
  .topleft {
    width: 500px;
    height: 70px;
    color: #fff;
    float: left;
    font-size: 20px;
    line-height: 68px;
    img {
      padding: 0px 22px 0px 22px;
      width: 140px;
      height: 30px;
      vertical-align: middle;
    }
    span {
      margin-left: 20px;
      font-size: 14px;
    }
  }
  .topright {
    float: right;
    color: #fff;
    margin-top: 15px;
    line-height: 35px;
    font-size: 16px;
    span {
      margin: 0px 15px;
      input {
        color: #000;
      }
    }
  }
}
</style>
