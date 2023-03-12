<template>
  <div style="width: 50%; margin-left: 20%;margin-top:3%">
    <h2>添加患者信息</h2>
    <el-card shadow="hover">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" label-position="left" class="demo-ruleForm"
       style="width: 80%; margin-left: 10%">
        <el-form-item label="患者姓名：" prop="patientName">
          <el-input v-model="ruleForm.patientName"></el-input>
        </el-form-item>
        <el-form-item label="身份证号：" prop="patientID">
          <el-input v-model="ruleForm.patientID"></el-input>
        </el-form-item>
        <el-form-item label="性  别：" prop="patientSex">
          <el-select v-model="ruleForm.patientSex" placeholder="请选择性别" style="width: 100%">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联系电话：" prop="patientPhone">
          <el-input v-model="ruleForm.patientPhone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">保存信息</el-button>
<!--          <el-button @click="resetForm('ruleForm')">重置</el-button>-->
          <el-button @click="returnPatient()">返回查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "AddPatient",
  data() {
    return {
      ruleForm: {
        patientName: '',
        patientSex: '',
        patientID: '',
        patientPhone: '',

      },
      rules: {
        patientName: [
          { required: true, message: '请输入姓名名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        patientSex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        patientID: [
          { required: true, message: '请输入身份证号', trigger: 'blur' },
          { min: 18, max: 18, message: '长度为 18 个字符', trigger: 'blur' }
        ],
        patientPhone: [
          { required: true, message: '请输入联系电话', trigger: 'blur' },
          { min: 11, max: 11, message: '长度在 11 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs ["ruleForm"].validate((valid) => {
        if(valid){
          axios.post('/savePatient',{
            patientName: this.ruleForm.patientName,
            patientID: this.ruleForm.patientID,
            patientSex: this.ruleForm.patientSex,
            patientPhone: this.ruleForm.patientPhone
          }).then(resp => {
              this.$alert(resp.data.message, '提示', {
                confirmButtonText: '确定'
              })
            }
          )
        } else {
          this.$alert('请输入信息', '提示', {
            confirmButtonText: '确定'
          })
        }
      })

    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    returnPatient() {
      this.$router.replace('/searchPatient')
    }
  }
}
</script>

<style scoped>

</style>
