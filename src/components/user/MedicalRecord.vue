<template>
  <div>
    <el-row >
      <el-col :span="4">
        <el-card shadow="never"body-style="padding: 0px" style="height: 70px">
          <h2>病历报告</h2>
        </el-card>
      </el-col>
      <el-col :span="20">
        <el-card shadow="never" style="height: 70px">
          <el-col :span="2"><h3 style="margin-top: 7px">{{this.patientInfo.patientName}}</h3></el-col>
          <el-col :span="18" style="margin-top: 9px">
              <el-col :span="10">身份证号: {{this.patientInfo.patientID}}</el-col>
              <el-col :span="5">月龄: {{this.patientInfo.patientAge}} (月)</el-col>
              <el-col :span="3">性别: {{this.patientInfo.patientSex}}</el-col>
          </el-col>
        </el-card>
      </el-col>
    </el-row>
<!--    <div style="width: 100%;height: 1px;background-color: #96b1de;margin-top: 20px"></div>-->
    <el-tabs
      router
      type="border-card"
      style="margin-top: 20px">
      <el-tab-pane label="基本生理参数" id="UserList">
        <base-info :physiological-params="physiologicalParams"></base-info>
      </el-tab-pane>
      <el-tab-pane label="步态参数报告">
        <GaitReport :patient-info="patientInfo"></GaitReport>
      </el-tab-pane>
      <el-tab-pane label="姿态评估报告"></el-tab-pane>
      <el-tab-pane label="量表报告"></el-tab-pane>
      <el-tab-pane label="既往病史"></el-tab-pane>
    </el-tabs>
  </div>


</template>

<script>
import BaseInfo from "../patientReport/BaseInfo";
import GaitReport from "../patientReport/GaitReport";
import axios from "axios";
export default {

  name: "UserList",
  components: {
    GaitReport,
    BaseInfo
  },
  data() {
    return {
      patientInfo: {
        patientID:'',
        patientName: '',
        patientSex: '',
        patientAge: ''
      },
      physiologicalParams: {
          weight: 17,
          height: 100
        }
    }
  },
  created() {
    this.patientInfo.patientID = this.$route.query.patientID
    this.patientInfo.patientName = this.$route.query.patientName
    this.patientInfo.patientSex = this.$route.query.patientSex
    this.patientInfo.patientAge = this.$route.query.patientAge
    this.getPhysiologicalParams(this.patientInfo.patientID)
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    getPhysiologicalParams(patientID) {
      this.axios.post('/getPhysiologicalParams?patientID='+patientID)
        .then(resp =>
          this.physiologicalParams = resp.data)
    }
  }
}
</script>

<style scoped>

</style>
