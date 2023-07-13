<template>
  <div class="hidden">
    <vs-sidebar
      v-model="active"
      open
    >
      <template style="height: 150px; height: 150px">
        <img :src="logo" >
      </template>
      <vs-sidebar-item id="home" to="/start">
        <template #icon>
          <i class='bx bx-home'></i>
        </template>
        首页
      </vs-sidebar-item>

      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class='bx bx-group'></i>
            </template>
            患者管理
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="search" to="/searchPatient">
          <template #icon>
            <i class='bx bxl-instagram'></i>
          </template>
          患者查询
        </vs-sidebar-item>

        <vs-sidebar-item id="record" to="/addTest">
          <template #icon>
            <i class='bx bxl-twitter' ></i>
          </template>
          新增检查
        </vs-sidebar-item>

        <vs-sidebar-item id="palyer" to="/electMedical">
          <template #icon>
            <i class='bx bxl-facebook' ></i>
          </template>
          电子病历
        </vs-sidebar-item>

      </vs-sidebar-group>

      <vs-sidebar-item id="cerebral" to="/cerebralPalsy">
        <template #icon>
          <i class='bx bxs-music'></i>
        </template>
        脑瘫分级
      </vs-sidebar-item>

      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class='bx bx-group'></i>
            </template>
            Peabody运动发育量表
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="project" to="/peabodyContent">
          <template #icon>
            <i class='bx bxl-instagram'></i>
          </template>
          量表项目
        </vs-sidebar-item>
        <vs-sidebar-item id="unit" to="/unitExplain">
          <template #icon>
            <i class='bx bxl-twitter' ></i>
          </template>
          评定单元介绍
        </vs-sidebar-item>
        <vs-sidebar-item id="train" to="/peabodyTraining">
          <template #icon>
            <i class='bx bxl-facebook' ></i>
          </template>
          训练单元和项目
        </vs-sidebar-item>
        <vs-sidebar-item id="character" to="/disableDevelop">
          <template #icon>
            <i class='bx bxl-facebook' ></i>
          </template>
          残疾儿童运动发育特征
        </vs-sidebar-item>
      </vs-sidebar-group>

      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class='bx bx-group'></i>
            </template>
            量表知识库
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="motion" to="/unitExplain">
          <template #icon>
            <i class='bx bxl-instagram'></i>
          </template>
          姿态
        </vs-sidebar-item>
        <vs-sidebar-item id="gmfm" to="/gmfm">
          <template #icon>
            <i class='bx bxl-twitter' ></i>
          </template>
          GMFM量表
        </vs-sidebar-item>
        <vs-sidebar-item id="fuglmeyer" to="/fuglmeyer">
          <template #icon>
            <i class='bx bxl-facebook' ></i>
          </template>
          FuglMeyer量表
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-item id="doctor" to="/doctorCenter">
        <template #icon>
          <i class='bx bx-home'></i>
        </template>
        个人中心
      </vs-sidebar-item>
    </vs-sidebar>
  </div>
</template>
<script>
import logo from '@/assets/logo4.png'
export default {
  // data:() => ({
  //   active: 'home',
  // })
  data() {
    return {
      active: 'home',
      logo: logo
    }
  }
}
</script>
<style>
img{
  width: 100%;
  height: auto;
  margin: 0px 0px;
}
</style>
