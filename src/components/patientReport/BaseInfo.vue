<template>
<div id="BaseInfo" style="float: left; text-align: left; margin-left: 4%">
<!--  体重： {{physiologicalParams.weight}}-->
<!--  身高： {{physiologicalParams.height}}-->
  <el-row style=" margin-top: 20px">
    月 龄： 276
  </el-row>
  <el-row style=" margin-top: 20px">
      身 高：153  cm
  </el-row>
  <el-row style=" margin-top: 20px">
    体 重：45 kg
  </el-row>
  <el-row style=" margin-top: 20px">
    <b>既往病史</b>
    <p>无</p>
  </el-row>


</div>
</template>

<script>
export default {
  name: "BaseInfo",
  props: {
    patientInfo: ''
  },
  data() {
    return {
    }
  },
  created() {
  }
}
</script>

<style scoped>

</style>
