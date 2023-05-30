<template>
  <el-form ref="form" :model="form" label-width="150px">
    <el-form-item label="编号">
      <el-input v-model="form.id"></el-input>
    </el-form-item>
    <el-form-item label="训练项目">
      <el-input v-model="form.name"></el-input>
    </el-form-item>


<!--    <el-form-item label="类别">-->
<!--      <el-radio-group v-model="form.type" style="float: left; margin-top: 10px; margin-left: 20px">-->
<!--        <el-radio label="反射"></el-radio>-->
<!--        <el-radio label="姿势"></el-radio>-->
<!--        <el-radio label="移动"></el-radio>-->
<!--        <el-radio label="实物操作"></el-radio>-->
<!--        <el-radio label="视觉-运动整合"></el-radio>-->
<!--      </el-radio-group>-->
<!--    </el-form-item>-->

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
      <el-input type="textarea" v-model="form.keyPoint"></el-input>
    </el-form-item>

    <el-form-item label="训练方法">
      <el-input :rows="7" type="textarea" v-model="form.method"></el-input>
    </el-form-item>

    <el-form-item >
      <el-button type="primary" @click="onSave">保存</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from "axios";

export default {
  name: "PeabodyTraining",
  data() {
    return {
      form: {
        name: '',
        id: '',
        goal: '',
        reason:'',
        ability: '',
        keyPoint: '',
        method: ''
      }
    }
  },
  methods: {
    onSave() {
      this.$refs ["form"].validate((valid) => {
        if (valid) {
          axios.post("/peabodyunit/insertItem", {
            id: this.form.id,
            name: this.form.name,
            goal: this.form.goal,
            reason: this.form.reason,
            ability: this.form.ability,
            keyPoint: this.form.keyPoint,
            method: this.form.method
          }).then(resp =>
              // this.projectList = resp.data
            {
              // console.log(resp.data === true)
              this.$confirm(resp.data === true?"保存成功" : "保存失败", '提示', {
                confirmButtonText: '确定'
              }).then(function () {
              })
              if(resp.data){
                this.$router.go(0)
              }
            }

          );
//使用vue-router路由到指定页面，该方式称之为编程式导航
//           this.$router.push("/main");
        }
      });
    },
  }
}
</script>

<style scoped>

</style>
