<template>
  <div>
    <div style="width: 100%;">
      <div style="margin-top: 20px; width: 100%">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/searchPatient' }">患者管理</el-breadcrumb-item>
          <el-breadcrumb-item>患者查询</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <el-divider></el-divider>
    <div>
      <el-row style="margin-top: 15px; margin-left: 10%">
        <el-col :span="4" style="margin-top: 10px; color: #4b8bea; float: left">患者查询：</el-col>
        <el-col :span="7">
          <!-- 搜索与添加区域 -->
          <el-input :rules="rules" type="text" placeholder="请输入手机号/身份证号" v-model="inputInfo">
            <el-button slot="append" icon="el-icon-search" v-on:click="getPatientList()"></el-button>
          </el-input>
        </el-col>
        <el-col :span="5">
          <vs-button border active="true" v-on:click="toAddPatient()" style="width: 100px; float: right; font-size: 13px">添加患者</vs-button>
  <!--        <el-button type="primary" v-on:click="toAddPatient()" style="width: 50%; float: right">添加</el-button>-->
        </el-col>
      </el-row>

      <div style="width: 100%;height: 5px;margin-top: 20px"></div>
      <el-table
        :data="patientList"
        stripe
        style="width: 100%; margin-top: 2%">
        <el-table-column
          prop="patientid"
          label="身份证号"
          width="250">
        </el-table-column>
        <el-table-column
          prop="patientname"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="patientsex"
          label="性别"
          width="180">
          <template slot-scope="scope">{{ scope.row.patientsex === 1 ? '男' : '女' }}</template>
        </el-table-column>
        <el-table-column
          prop="patientphone"
          label="联系电话"
          width="250">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="OpenReport(scope.$index, scope.row.patientid,scope.row.patientname, scope.row.patientsex)">查看病历</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchPatient",
  data() {
    return {
      inputInfo: '',
      patientList: [],
      rules: {
        inputInfo: [
          { required: true, message: '请输入姓名名称', trigger: 'blur' },
          { min: 11, max: 15, message: '长度在 2 到 10 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    OpenReport(index, patientid, patientname, patientsex) {
      this.$router.push({path: '/testList', query: {
        patientID: patientid,
          patientName: patientname,
          patientSex: patientsex === 1? '男' : '女',
          patientAge: this.getAge(patientid)
        }})
      // this.$router.replace('/medicalRecord')
    },
    toAddPatient() {
      this.$router.replace('/addPatient')
    },

    getPatientList() {
      axios.post('/getPatient', {
        searchInfo: this.inputInfo
          // ?searchInfo='+this.inputInfo
      }).then(resp => {
        this.patientList = resp.data
        console.log(this.patientList)
      })},

    getAge(patientID) {
      let val = patientID.length;
      let myDate = new Date();
      let age = 0;
      let myMonth = 0;
      if (val === 18) {
        age = myDate.getFullYear() - patientID.substring(6, 10) - 1;

        myMonth = age * 12 + 12 - parseInt(patientID.substring(10, 12)) + myDate.getMonth();
      }
      return myMonth;
    },

  }
}
</script>

<style scoped>

</style>
