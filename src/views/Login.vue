<template>
  <div style="height: 100%; margin-top: 10%">
    <el-card class="box-card">
      <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
        <h3 class="login-title">欢 迎 登 录</h3>
        <el-form-item label=" 账号" prop="d_id">
          <el-input prefix-icon="el-icon-user" type="text" placeholder="请输入账号" v-model="form.d_id"/>
        </el-form-item>
        <el-form-item label=" 密码" prop="password">
          <el-input prefix-icon="el-icon-lock" show-password type="password" placeholder=" 请输入密码" v-model="form.password"/>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 70%; margin-right: 10%" type="primary" v-on:click="onSubmit()">登录</el-button>
          <router-link to="/register">注册账号</router-link>
        </el-form-item>

      </el-form>
<!--      <el-dialog-->
<!--        title="温馨提示"-->
<!--        :visible.sync="dialogVisible"-->
<!--        width="30%"-->
<!--        :before-close="handLeClose">-->
<!--        <span>请输入账号和密码</span>-->
<!--        <span slot="footer" class="dialog- footer">-->
<!--        <el-button type="primary" @click="dialogVisible = false">确定</el-button>-->
<!--      </span>-->
<!--      </el-dialog>-->
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";

export default {
  name: "Login",
  data() {
    return {
      form: {
        d_id: '',
        password: ''
      },
      //表单验证，需要在el-form-item 元素中增加prop 属性
      rules: {
        d_id: [
          {required: true, min: 8, max: 8, message: " 账号不可为空", trigger: 'blur'}
        ],
        password: [
          {required: true, message: " 密码不可为空 ", trigger: 'blur'}
        ]
      },
//对话框显示和隐藏
      dialogVisible: false
    }
  },
  methods: {
    onSubmit() {
      // axios.post('/doctorLogin', {
      //   d_id: parseInt(this.form.d_id),
      //   password: this.form.password
      // }).then(res => {
      //   if(res.data.code === 200) {
      //     this.$router.push({path: '/main'})
      //   } else{
      //     this.$alert(resp.data.message, '提示', {
      //       confirmButtonText: '确定'
      //     })
      //   }
      // })
//为表单绑定验证功能
      this.$refs ["loginForm"].validate((valid) => {
        if (valid) {
          axios.post('/doctorLogin', {
            d_id: this.form.d_id,
            password: this.form.password
          }).then(resp => {
            if(resp.data.code === 200) {
              this.$router.push({path: '/index', params: {
                authority: resp.data.authority
                }})
            } else{
              this.$alert(resp.data.message, '提示', {
                confirmButtonText: '确定'
              })
            }
          })
//使用vue-router路由到指定页面，该方式称之为编程式导航
//           this.$router.push("/main");
        } else {
          this.dialogVisible = true;
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.box-card {
  width: 30%;
  margin: auto;
  height: 30%;
}
a{
  /*background-color: #42b983;*/
  text-decoration: none;
  color: dodgerblue;
}
</style>
