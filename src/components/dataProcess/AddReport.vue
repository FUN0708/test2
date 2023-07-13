<template>
  <div>
    <div style="margin-bottom:15px;margin-top: 10px; width: 100%;" >
      <el-page-header @back="goBack" title="返回" content="添加诊断报告">
      </el-page-header>
    </div>

    <div style="text-align: left">
      <p><b>患者姓名：</b>
<!--      {{ this.patientInfo.patientName }}-->
      </p>
      <b>诊断结果：</b>
      <el-input type="textarea" style="font-size: 16px;" v-model="content" :rows="6" autocomplete="off"></el-input>

      <div>
        <p style="width: 200px; float:left;"><b>选择康复方案：</b></p>
        <div style="margin-top: 10px">
          <el-checkbox v-model="train1" label="训练1" border></el-checkbox>
          <el-checkbox v-model="train2" label="训练2" border></el-checkbox>
          <el-checkbox v-model="train3" label="训练3" border></el-checkbox>
          <el-checkbox v-model="train4" label="训练4" border></el-checkbox>
          <el-checkbox v-model="train5" label="训练5" border></el-checkbox>
          <el-checkbox v-model="train6" label="训练6" border></el-checkbox>
          <el-checkbox v-model="train7" label="训练7" border></el-checkbox>
          <el-checkbox v-model="train8" label="训练8" border></el-checkbox>
        </div>
        <div style="height: 280px;">
          <p v-if="train1 === true">训练1: 介绍</p>
          <p v-if="train2 === true">训练2: 介绍</p>
          <p v-if="train3 === true">训练3: 介绍</p>
          <p v-if="train4 === true">训练4: 介绍</p>
          <p v-if="train5 === true">训练5: 介绍</p>
          <p v-if="train6 === true">训练6: 介绍</p>
          <p v-if="train7 === true">训练7: 介绍</p>
          <p v-if="train8 === true">训练8: 介绍</p>
        </div>
      </div>

      <vs-button primary style="margin-left: 45%;  width: 200px">保存诊断报告</vs-button>
    </div>
  </div>


</template>

<script>
export default {
  name: "AddReport",
  props: {
    patientInfo: ''
  },
  data() {
    return {
      content: '',
      train1: '',
      train2: '',
      train3: '',
      train4: '',
      train5: '',
      train6: '',
      train7: '',
      train8: '',
    }
  },
  methods: {
    goBack() {
      this.$router.push({path: '/medicalRecord', params: {
          // patientID: this.patientInfo.patientID,
          // testDate: this.patientInfo.testDate
        }})
    }
  }
}
</script>

<style scoped>

/deep/ .el-page-header__content {
    font-size: 16px;
  }
/deep/ .el-page-header__title {
  font-size: 16px;
}

</style>
