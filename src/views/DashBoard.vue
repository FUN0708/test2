<template>
  <el-container style="position:absolute;left:0;right:0;top:0;overflow:hidden;">
    <el-header style=" height: 8vh;
    background-color: #4b8bea; ">
      <h1 style="float: left; margin-left: 40%; color: white">婴  幼  儿  运  动  发  育  评  估  系  统</h1>
<!--      <vheader style="float: right"></vheader>-->
    </el-header>
    <el-container>
      <el-aside style="height: 92vh; width: 16%;">
        <navmenu></navmenu>
      </el-aside>

<!--      <el-container>-->
<!--        面包屑导航-->
<!--        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top: 10px">-->
<!--          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
<!--        </el-breadcrumb>-->

        <el-main style="background-color: rgba(223,229,236,0.29);">
          <router-view></router-view>
        </el-main>
<!--        <el-footer style="background-color: #a1a1a1; height: 3%; color: gainsboro">www.pangqiaofang.com@pqf</el-footer>-->
<!--      </el-container>-->
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from "../components/dashboard/NavMenu";
import Header from "../components/dashboard/Header";

export default {
  name: "DashBoard",
  components: {
    'navmenu': NavMenu,
  }

}
</script>

<style scoped>
</style>
