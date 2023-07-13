<template>

  <div>
    <div style="margin-top: 20px; width: 100%">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/searchPatient' }">患者管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/addTest' }">新增检查</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path: '/addBaseInfo'}">患者信息</el-breadcrumb-item>
        <el-breadcrumb-item>三维数据</el-breadcrumb-item>

      </el-breadcrumb>
    </div>

    <h2>添 加 三 维 运 动 检 测 数 据</h2>
    <el-divider></el-divider>
    <div style="text-align: left">
      <b>患者ID: {{ this.id }}</b>
      <b style="margin-left: 200px">检查日期: {{ this.date }}</b>
      <el-divider></el-divider>

      <el-row>
        <el-col :span="12">
          <p style=" float: left">运动模式： </p>
          <el-select v-model="value" placeholder="请选择检查项目" style="margin-top: 10px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>

        <el-col :span="12">
          <p style=" float: left">文件序号： </p>
          <el-input style="width: 200px; margin-top: 10px" v-model="gait_index" ></el-input>
        </el-col>
      </el-row>



    </div>

    <el-card style="height: 45vh; margin-top: 30px" shadow="never">
<!--      <vs-button border type="primary" @click="saveGait" style="margin-bottom: 30px; margin-left: 42%; width: 220px"> 提交保存 </vs-button>-->
      <div>
        <el-upload
          class="upload_btn"
          ref="upload"
          action="string"
          accept=".csv"
          :limit="1"
          :show-file-list="true"
          :file-list="fileList"
          :auto-upload="false"
          :before-upload="beforeGaitUpload"
          style="float: left; margin-left: 30%;"
        >
          <vs-button border slot="trigger" type="primary" @click="saveGait" style="margin-bottom: 30px; width: 220px">选取文件</vs-button>
        </el-upload>
        <vs-button border type="primary" @click="saveGait" style="margin-bottom: 30px; width: 220px; float:left;"> 提交保存 </vs-button>
        <el-alert
          v-model="gaitsuccess"
          title="数据上传成功"
          type="success"
          center
          v-show="gaitsuccess === true"
          show-icon>
        </el-alert>

        <el-alert
          v-model="gaitfail"
          title="数据上传失败，请重新上传"
          type="error"
          center
          v-show="gaitfail === true"
          show-icon>
        </el-alert>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GaitUpload",
  data() {
    return {
      value: '',
      gait_index: '',
      id: '',
      date: '',
      options: [{
        value: '1',
        label: '直行模式'
      }, {
        value: '2',
        label: '跨步模式'
      }, {
        value: '3',
        label: '8字模式'
      }],
      gaitsuccess: '',
      gaitfail:'',
    }
  },
  created() {
    this.id = this.$route.query.id
    this.date = this.$route.query.testDate
    // console.log(this.id, this.date, 'hhhhhhh')
  },
  methods: {
    saveGait() {
      axios.post('/saveCheckInfo', {
        patientID: this.id,
        testDate: this.date,
        index: this.gait_index,
        mode: this.options.values(),
        file: this.fileList,
      }).then(resp => {
        console.log(this.fileList, 'fillllllll')
        console.log(resp.data)
        if(resp.data.code === 200) {
          this.gaitsuccess = true
          this.$alert(resp.data.message, '提示', {
            confirmButtonText: '确定'
          })
        } else{

          this.gaitfail = true
          this.$alert(resp.data.message, '提示', {
            confirmButtonText: '确定'
          })
        }
      })
    }
  }
}
</script>

<style>

</style>
