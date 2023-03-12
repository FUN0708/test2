<template>
  <el-form ref="form" :model="form" label-width="150px">
    <el-form-item label="训练项目">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="类别">
      <el-radio-group v-model="form.type" style="float: left; margin-top: 10px; margin-left: 20px">
        <el-radio label="反射"></el-radio>
        <el-radio label="姿势"></el-radio>
        <el-radio label="移动"></el-radio>
        <el-radio label="实物操作"></el-radio>
        <el-radio label="视觉-运动整合"></el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="训练目标">
      <el-input type="textarea" v-model="form.goal" size="50px"></el-input>
    </el-form-item>

    <el-form-item label="训练原因">
      <el-input type="textarea" v-model="form.reason"></el-input>
    </el-form-item>

    <el-form-item label="生活中的相关技能">
      <el-input type="textarea" v-model="form.ability"></el-input>
    </el-form-item>

    <el-form-item label="训练要点">
      <el-input type="textarea" v-model="form.keypoint"></el-input>
    </el-form-item>

    <el-form-item label="训练方法">
      <el-input :rows="7" type="textarea" v-model="form.method"></el-input>
    </el-form-item>

    <el-form-item >
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "PeabodyTraining",
  data() {
    return {
      form: {
        name: '',
        type: '',
        goal: '',
        ability: '',
        keypoint: '',
        method: ''
      }
    }
  },
  methods: {
    onSubmit() {

    }
  }
}
</script>

<style scoped>

</style>
