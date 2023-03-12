<template>
<!--<p>这里是用户信息</p>-->
  <el-button type="primary" round v-on:click="toOne()">主要按钮</el-button>
<!--  <router-link to="/userList">显示userList</router-link>-->
</template>

<script>
export default {
  name: "UserInfo",
  methods:{
    toOne() {
      this.$router.replace('/userList')
    }
  }
}
</script>

<style scoped>

</style>
