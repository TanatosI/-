<template lang="">
  <div>
    <!-- 搜索历史 -->
    <van-cell title="搜索历史">
      <template>
        <van-icon name="delete-o" v-if="!isEdit" @click="isEdit = true" />

        <div v-else>
          <spann @click="$store.commit('SET_HISTORIES', [])">全部删除</spann>
          &nbsp;
          <spann @click="isEdit = false">完成</spann>
        </div>
      </template>
    </van-cell>

    <van-cell v-for="item in histories" :key="item" :title="item" @click="!isEdit && $emit('channge-keywords', item)">
      <template #extra>
        <van-icon
          name="close"
          v-show="isEdit"
          @click="
            $store.commit(
              'SET_HISTORIES',
              histories.filter((i) => item !== i)
            )
          "
        />
      </template>
    </van-cell>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isEdit: false
    }
  },
  computed: {
    ...mapState(['histories'])
  }
}
</script>
<style lang=""></style>
