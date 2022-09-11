<template>
  <div>
    <!-- {{ conust }}
    <h2>cunust的10倍值{{ bigNum }}</h2>
    <button @click="SET_CONUST(1)">点击conust++</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapMutations } from 'vuex'
// console.log(mapState(['conust']))
// // 3.配置rem动起来
export default {
//   methods: {
//     ...mapMutations(['SET_CONUST'])
//   },
//   computed: {
//     ...mapState(['conust']),
//     ...mapGetters(['bigNum'])
  // }
}
</script>

<style lang="less" scoped>
// 调试rem
// .box {
//     width: 2rem;
//     height: 2rem;
//     background-color: gold;
//   }
</style>
