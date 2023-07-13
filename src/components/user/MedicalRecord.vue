<template>
  <div>
    <div style="margin-top: 20px; width: 100%">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/searchPatient' }">患者管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/testList' }">病历报告</el-breadcrumb-item>
        <el-breadcrumb-item>报告详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="margin-top: 20px">
      <el-row >
        <el-col :span="24">
          <el-card shadow="never"  style="height: 60px">
            <el-col :span="2">姓名： {{this.patientInfo.patientName}}</el-col>
            <el-col :span="18">
              <el-col :span="8">身份证号: {{this.patientInfo.patientID}}</el-col>
              <el-col :span="5">性别: {{this.patientInfo.patientSex}}</el-col>
              <el-col :span="5">检查日期: {{this.patientInfo.testDate}}</el-col>
            </el-col>
            <el-col :span="2">
              <vs-button border
                         @click="toAddReport"
                         style="height: 30px; width: 150px; margin:0;padding: 0">添加诊断报告</vs-button>
            </el-col>
          </el-card>
        </el-col>
      </el-row>
      <!--    <div style="width: 100%;height: 1px;background-color: #96b1de;margin-top: 20px"></div>-->
      <el-tabs
        router
        v-model="activeName"
        style="margin-top: 20px; height: 200px; font-size: 16px" @tab-click="handleEdit">
          <el-tab-pane label="生 理 参 数" id="UserList" name="baseinfo">
            <base-info :physiological-params="physiologicalParams" v-if="activeName==='baseinfo'"></base-info>
          </el-tab-pane>
          <el-tab-pane label="步 态 分 析" id="CheckList" name="gait">
            <CheckList :patientInfo="patientInfo" v-if="activeName==='gait'"></CheckList>
          </el-tab-pane>

          <el-tab-pane label="量 表 评 估" name="scale">

          </el-tab-pane>

<!--        <el-tab-pane label="相似病历检索" name="same_report">-->

<!--        </el-tab-pane>-->

          <el-tab-pane label="运 动 视 频" name="video"></el-tab-pane>
          <el-tab-pane label="诊 断 结 果" name="report">

          </el-tab-pane>

        <el-tab-pane label="相似病历检索" name="same_report">
          <SearchReport></SearchReport>
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>


</template>

<script>
import BaseInfo from "../patientReport/BaseInfo";
import GaitReport from "../patientReport/GaitReport";
import axios from "axios";
import ActionReport from "../patientReport/ActionReport";
import AnkleJointAxis from "../patientReport/AnkleJointAxis";
import CheckList from "../patientReport/CheckList";
import AddReport from "../dataProcess/AddReport";
import SearchReport from "../patientReport/SearchReport";

export default {

  name: "UserList",
  components: {
    SearchReport,
    AddReport,
    CheckList,
    AnkleJointAxis,
    ActionReport,
    GaitReport,
    BaseInfo
  },
  data() {
    return {
      patientInfo: {
        patientID:'',
        patientName: '',
        patientSex: '',
        testDate: ''
      },
      activeName: 'baseinfo',
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
    this.patientInfo.testDate= this.$route.query.testDate
    // this.getPhysiologicalParams(this.patientInfo.patientID)
  },
  methods: {
    handleEdit() {
      // console.log(this.activeName+'hhhh')
      if(name === 'baseinfo') this.activeName = 'baseinfo'
      else if(name === 'gait') this.activeName = 'gait'
      else if(name === 'same_report') this.activeName = 'same_report'
      else if(name === 'video') this.activeName = 'video'
      else if(name === 'report') this.activeName = 'report'
    },
    toAddReport() {
      this.$router.push({path: '/addReport', params: {
         patientInfo: this.patientInfo
        }})
    }
    // getPhysiologicalParams(patientID) {
    //   this.axios.post('/getPhysiologicalParams?patientID='+patientID)
    //     .then(resp =>
    //       this.physiologicalParams = resp.data)
    // }
  }
}
</script>

<style scoped>

</style>
