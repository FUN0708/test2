<template>
  <div>
    <div style="margin-top: 20px; width: 100%">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/searchPatient' }">患者管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/addTest' }">新增检查</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path: '/addBaseInfo'}">患者信息</el-breadcrumb-item>
        <el-breadcrumb-item>肌电数据</el-breadcrumb-item>

      </el-breadcrumb>
    </div>

    <div style="text-align: left">
      <b>运动模式： </b>
      <el-select v-model="value" placeholder="请选择检查项目">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <b style="margin-left: 50px">文件序号： </b>
      <el-input style="width: 200px" v-model="emg_index"></el-input>
    </div>

    <el-card header="下肢肌电数据" style="height: 45vh; margin-top: 30px" shadow="never">
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
          :before-upload="beforeEmgUpload"
          style="float: left; margin-left: 30%"
        >
          <vs-button border slot="trigger" type="primary" @click="submitEmg" style="margin-bottom: 30px; width: 220px">选取文件</vs-button>
        </el-upload>
        <vs-button border type="primary" @click="saveEmg" style="margin-bottom: 30px; width: 220px; float:left;"> 提交保存 </vs-button>
        <el-alert
          v-model="emgsuccess"
          title="下肢肌电数据上传成功"
          type="success"
          center
          v-show="emgsuccess === true"
          show-icon>
        </el-alert>

        <el-alert
          v-model="emgfail"
          title="肌电频数据上传失败，请重新上传"
          type="error"
          center
          v-show="emgfail === true"
          show-icon>
        </el-alert>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "EmgUpload",
  data() {
    return{
      value: '',
      emg_index: '',
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
      emgsuccess:'',
      emgfail: '',
    }
  },
  methods: {
    saveEmg() {
      this.emgsuccess = true
    },
  },
  created() {
    this.id = this.$route.query.id
    this.date = this.$route.query.date
  }
}
</script>

<style scoped>

</style>
