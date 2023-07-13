<template>

  <div class="grid">
    <div>
      <div style="width: 20%">
        <v-menu></v-menu>
      </div>
      <div style="width: 84%; float: right;" >
        <router-view></router-view>
      </div>
    </div>
<!--    <vs-row>-->
<!--      <vs-col :w="2"  style="background-color: #4b8bea">-->
<!--        <v-menu></v-menu>-->
<!--      </vs-col>-->
<!--      <vs-col :w="10">-->
<!--        <el-card>-->
<!--          <router-view></router-view>-->
<!--        </el-card>-->
<!--      </vs-col>-->
<!--    </vs-row>-->
  </div>

<!--  <el-container style="position:absolute;left:0;right:0;top:0;overflow:hidden;">-->
<!--    <el-header style=" height: 8vh;-->
<!--    background-color: #4b8bea; ">-->
<!--      <h1 style="float: left; margin-left: 40%; color: white">婴  幼  儿  运  动  发  育  评  估  系  统</h1>-->
<!--&lt;!&ndash;      <vheader style="float: right"></vheader>&ndash;&gt;-->
<!--    </el-header>-->
<!--    <el-container>-->
<!--      <el-aside style="height: 92vh; width: 16%;">-->
<!--&lt;!&ndash;        <navmenu></navmenu>&ndash;&gt;-->
<!--        <v-menu ></v-menu>-->

<!--      </el-aside>-->

<!--&lt;!&ndash;      <el-container>&ndash;&gt;-->
<!--&lt;!&ndash;        面包屑导航&ndash;&gt;-->
<!--&lt;!&ndash;        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top: 10px">&ndash;&gt;-->
<!--&lt;!&ndash;          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-breadcrumb>&ndash;&gt;-->

<!--        <el-main style="background-color: rgba(223,229,236,0.29);">-->
<!--          <router-view></router-view>-->
<!--        </el-main>-->
<!--&lt;!&ndash;        <el-footer style="background-color: #a1a1a1; height: 3%; color: gainsboro">www.pangqiaofang.com@pqf</el-footer>&ndash;&gt;-->
<!--&lt;!&ndash;      </el-container>&ndash;&gt;-->
<!--    </el-container>-->
<!--  </el-container>-->
</template>

<script>
import NavMenu from "../components/dashboard/NavMenu";
import Header from "../components/dashboard/Header";
import Menu from "../components/dashboard/Menu";

export default {
  name: "DashBoard",
  components: {
    'navmenu': NavMenu,
    'v-menu': Menu
  }

}
</script>

<style scoped>
</style>
