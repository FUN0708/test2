<template>
<div>
  <el-card class="box-card">
    <h2>个人中心</h2>
    <div style="width: 100%; height: 160px">
      <el-avatar style="float: left;margin-left: 20%" shape="square" :size="150" :fit="fill" :src="url"></el-avatar>
      <div style="float: right;margin-right: 40%">
        <p>医生姓名</p>
        <p>医生性别</p>
        <p>医生年龄</p>
      </div>
    </div>
    <div style="width: 100%">
      <el-button style="width: 200px;margin:30px">修改密码</el-button><br>
      <el-button style="width: 200px" type="primary" @click.native="logout">退出登录</el-button>
    </div>
  </el-card>
</div>
</template>

<script>
export default {
  name: "DocterCenter",
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  methods: {
    logout(){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>
<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 800px;
  margin: auto;
}
</style>
