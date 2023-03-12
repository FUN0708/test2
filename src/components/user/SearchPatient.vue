<template>
  <div>
    <el-row style="margin-top: 15px; margin-left: 10%">
      <el-col :span="4" style="margin-top: 10px; color: #4b8bea;">患者查询：</el-col>
      <el-col :span="7">
        <!-- 搜索与添加区域 -->
        <el-input :rules="rules" type="text" placeholder="请输入手机号/身份证号" v-model="inputInfo">
          <el-button slot="append" icon="el-icon-search" v-on:click="getPatientList()"></el-button>
        </el-input>
      </el-col>
      <el-col :span="5">
        <el-button type="primary" v-on:click="toAddPatient()" style="width: 50%; float: right">添加</el-button>
      </el-col>
    </el-row>
    <div style="width: 100%;height: 0.5px;background-color: #96b1de;margin-top: 20px"></div>
    <el-table
      :data="patientList"
      stripe
      style="width: 100%; margin-top: 2%">
      <el-table-column
        prop="patientID"
        label="身份证号"
        width="250">
      </el-table-column>
      <el-table-column
        prop="patientName"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="patientSex"
        label="性别"
        width="180">
        <template slot-scope="scope">{{ scope.row.patientSex === 1 ? '男' : '女' }}</template>
      </el-table-column>
      <el-table-column
        prop="patientPhone"
        label="联系电话"
        width="250">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="OpenReport(scope.$index, scope.row.patientID,scope.row.patientName, scope.row.patientSex)">查看病历</el-button>
        </template>
      </el-table-column>
    </el-table>
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
    OpenReport(index, patientID, patientName, patientSex) {
      this.$router.push({path: '/medicalRecord', query: {
        patientID: patientID,
          patientName: patientName,
          patientSex: patientSex === 1? '男' : '女',
          patientAge: this.getAge(patientID)
        }})
      // this.$router.replace('/medicalRecord')
    },
    toAddPatient() {
      this.$router.replace('/addPatient')
    },
    getPatientList() {
      axios.post('/getPatient?searchInfo='+this.inputInfo, {
        // searchInfo: this.inputInfo
      }).then(resp =>
        this.patientList = resp.data)
    },
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
    }
  }
}
</script>

<style scoped>

</style>
