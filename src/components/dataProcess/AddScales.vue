<template>
 <div>

   <div style="margin-top: 20px; width: 100%">
     <el-breadcrumb separator-class="el-icon-arrow-right">
       <el-breadcrumb-item :to="{ path: '/searchPatient' }">患者管理</el-breadcrumb-item>
       <el-breadcrumb-item :to="{ path: '/addTest' }">新增检查</el-breadcrumb-item>
       <el-breadcrumb-item>量表定制</el-breadcrumb-item>
     </el-breadcrumb>
   </div>

   <div style="margin-top: 20px">
     <el-card style="text-align: left">
       <h2>量表定制</h2>

       <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
         <el-form-item label="患者ID" style="width: 45%; float: left">
           <el-input v-model="form.id"></el-input>
         </el-form-item>
         <el-form-item label="月 龄" style="width: 45%; float: right">
           <el-input v-model="form.age"></el-input>
         </el-form-item>
         <el-form-item label="体重(kg)" style="width: 45%; float: left">
           <el-input v-model="form.weight"></el-input>
         </el-form-item>
         <el-form-item label="身高(cm)" style="width: 45%; float: right">
           <el-input v-model="form.height"></el-input>
         </el-form-item>

         <span style="float: left; margin-right: 5px; margin-left: 40px">选择需要评估的量表：</span>
         <el-checkbox-group v-model="checkList" >
           <el-checkbox label="Peabody量表"></el-checkbox>
           <el-checkbox label="Gesell量表"></el-checkbox>
           <el-checkbox label="FuglMeyer量表"></el-checkbox>
         </el-checkbox-group>
       </el-form>

       <vs-button border @click="get_report">生成评估量表</vs-button>

     </el-card>
   </div>
 </div>
</template>

<script>
export default {
  name: "AddScales",
  data() {
    return {
      value1: '',
      age: '',
      form: {
        id: '',
        age: '',
        weight: '',
        height: ''
      },
      checkList: []
    }
  },
  methods: {
    get_report(){

    }
  }
}
</script>

<style scoped>

</style>
