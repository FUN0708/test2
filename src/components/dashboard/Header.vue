<template>
  <el-container >
    <el-header>
        <el-dropdown>
          <i class = el-icon-setting style="margin-top: 100%;"></i>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </el-header>
  </el-container>
<!--  <el-row>-->
<!--    <el-col :span="24"-->
<!--    <div class="head-wrap">-->
<!--      <h2>步态分析与检测系统</h2>-->
<!--    </div>-->
<!--    </el-col>-->
<!--  </el-row>-->
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout(){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.head-wrap{

}
</style>
