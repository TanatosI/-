<template>
  <div>
    <transition name="van-slide-left" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
// 调试rem
// .box {
//     width: 2rem;
//     height: 2rem;
//     background-color: gold;
//   }
</style>
