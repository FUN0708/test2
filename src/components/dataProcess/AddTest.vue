<template>
  <div>
    <div style="margin-top: 20px; width: 100%; margin-bottom: 30px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/searchPatient' }">患者管理</el-breadcrumb-item>
        <el-breadcrumb-item >新增检查</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div>
      <h2>检查项目</h2>
      <el-card style="text-align: left">
        <b style="width: 85%">项目名： 运动检测</b>
        <vs-button border primary style="float: right; width: 10%" v-on:click="toGaitData()" >新增</vs-button>
        <p><b>项目描述：</b> 运动检测是首先通过三维高速摄像机对人体运动进行检测，通过识别运动过程中的骨骼关节点序列；其次，通过肌电采集设备对
          运动过程中下肢肌电数据进行采集，最后分别将骨骼关节点序列数据、下肢肌电数据以及运动视频数据进行分析与可视化。</p>

        <p>数据格式如下要求：</p>
        <ul>
          <li>三维数据：每行表示一帧25个关节点的[x,y,z]坐标数据序列</li>
          <li>肌电数据：每行表示下肢8块肌肉的肌电信号</li>
          <li>运动视频：每个视频表示单一模式下第i次的检测</li>
        </ul>

      </el-card>

      <el-card style="text-align: left; margin-top: 30px">
        <b style="width: 85%">项目名： 量表评估</b>
        <vs-button border primary style="float: right; width: 10%" v-on:click="toAddScale">新增</vs-button>
        <p ><b>项目描述：</b> 量表评估方案主要以Peabody运动评估量表和Gesell发育量表为主,这里是peabody和Gesell的描述，
          这里是peabody和Gesell的描述， 这里是peabody和Gesell的描述， 这里是peabody和Gesell的描述，
          这里是peabody和Gesell的描述， 这里是peabody和Gesell的描述， 这里是peabody和Gesell的描述， </p>

        <p>量表定制要求说明：</p>
        <ul>
          <li>只能参考</li>
          <li>部分需要手动导入</li>
          <li>评估需要手动打分</li>
        </ul>
      </el-card>

    </div>

  </div>

</template>

<script>
export default {
  name: "AddTest",
  methods: {
    toGaitData() {
      this.$router.replace('/addBaseInfo')
    },
    toAddScale() {
      this.$router.replace('/addScales')
    }
  }
}
</script>

<style scoped>

</style>
