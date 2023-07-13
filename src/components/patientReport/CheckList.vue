<template>
  <div style="text-align: left">
    <el-card>
      <b>基本步态参数</b>
      <el-row style="margin-top: 10px">
        <el-col :span="8">平均步长（米）：0.43</el-col>
        <el-col :span="8">平均步频（米/秒）：0.46</el-col>
        <el-col :span="8">平均步宽（米）：0.13</el-col>
      </el-row>
      <el-row style="margin-top: 10px">
        <el-col :span="8">平均步速（米/秒）：</el-col>
        <el-col :span="8">左脚步幅（米）</el-col>
        <el-col :span="8">右脚步幅（米）</el-col>
      </el-row>
      <el-row style="margin-top: 10px">
        <el-col :span="12">髋关节最大伸展角（度）：</el-col>
        <el-col :span="12">髋关节最大屈曲角（度）：</el-col>
      </el-row>
      <el-row style="margin-top: 10px">
        <el-col :span="12">膝关节最大伸展角（度）：</el-col>
        <el-col :span="12">膝关节最大屈曲角（度）：</el-col>
      </el-row>
      <el-row style="margin-top: 10px">
        <el-col :span="12">质心上下偏移范围（米）：</el-col>
        <el-col :span="12">质心左右偏移范围（米）：</el-col>
      </el-row>
    </el-card>
    <AnkleJointAxis :patientInfo="patientInfo"></AnkleJointAxis>

    <KneeJointAngle :patientInfo="patientInfo"></KneeJointAngle>

    <HipJointAngle :patientInfo="patientInfo"></HipJointAngle>

    <BaryCenter :patientInfo="patientInfo"></BaryCenter>
  </div>
</template>
<style>
</style>
<script>
import GaitReport from "./GaitReport";
import AnkleJointAxis from "./AnkleJointAxis";
import KneeJointAngle from "./KneeJointAngle";
import HipJointAngle from "./HipJointAngle";
import BaryCenter from "./BaryCenter";
export default {
  name: "CheckList",
  components: { BaryCenter, HipJointAngle, KneeJointAngle, AnkleJointAxis, GaitReport},
  props:{
    patientInfo: ''
  },
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
