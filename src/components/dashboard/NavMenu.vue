<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
               unique-opened
               router
               style="text-align: left">
        <el-menu-item index="/start">
          <template slot="title">
            <i class="el-icon-house"></i>
            <span>首 页</span>
          </template>
        </el-menu-item>

        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>患者管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/searchPatient" >患者查询</el-menu-item>
            <el-menu-item index="/medicalRecord">病历查询</el-menu-item>
            <el-menu-item index="/selectCheckItems">检查项目</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="/cerebralPalsy">
          <template slot="title">
            <i class="el-icon-house"></i>
            <span>脑瘫分级</span>
          </template>
        </el-menu-item>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document-copy"></i>
            <span>Peabody运动发育量表</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/peabodyContent">量表项目</el-menu-item>
            <el-menu-item index="/unitExplain">评定单元介绍</el-menu-item>
            <el-menu-item index="/peabodyTraining">训练单元和项目</el-menu-item>
            <el-menu-item index="/disableDevelop">残疾儿童运动发育特征</el-menu-item>
<!--            <el-menu-item index="2-5">Alberta婴儿运动量表</el-menu-item>-->
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-document-copy"></i>
            <span>量表知识库</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/unitExplain">姿态</el-menu-item>
            <el-menu-item index="/gmfm">GMFM评定量表</el-menu-item>
            <el-menu-item index="/fuglmeyer">Fugl-Meyer运动功能评定量表</el-menu-item>
            <el-menu-item index="2-4">Gesell发育量表</el-menu-item>
            <el-menu-item index="2-5">Alberta婴儿运动量表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-first-aid-kit"></i>
            <span>步态知识库</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-menu-item index="2-4">选项4</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="/doctorCenter">
          <template slot="title">
            <i class="el-icon-help"></i>
            <span>个人中心</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<style>
</style>
<script>
export default {
  data() {
    return {
      authority: '1',
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
