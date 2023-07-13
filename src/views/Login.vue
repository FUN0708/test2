<template>

  <div class="container">
    <div class="login-container">
      <div class="login-left">
        <div class="top">
          <div class="title">
            <span>欢迎使用</span>
          </div>
          <div class="desc">
            <span>婴幼儿运动发育状态评估系统</span>
            <span>Motion Analysis System</span>
          </div>
          <div>
          </div>
        </div>
        <div class="bottom">
          <img :src="working">
        </div>
      </div>
      <div class="login-right">
        <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
          <el-form-item  prop="d_id">
            <vs-input primary border label-placeholder="账号" v-model="form.d_id"/>
<!--            <el-input prefix-icon="el-icon-user" type="text" placeholder="请输入账号" v-model="form.d_id"/>-->
          </el-form-item>
          <el-form-item  prop="password">
            <vs-input border type="password" label-placeholder="密码" v-model="form.password" style="width: 290px"/>
<!--            <el-input prefix-icon="el-icon-lock" show-password type="password" placeholder=" 请输入密码" v-model="form.password"/>-->
          </el-form-item>
          <el-form-item>
            <el-button style="width:290px; font-size: 12px" type="primary"  v-on:click="onSubmit()">登录</el-button>
            <router-link style="float: left" to="/register">注册账号</router-link>
            <router-link style="float: right" to="/register">忘记密码</router-link>
          </el-form-item>

        </el-form>
      </div>
    </div>
  </div>

<!--  <div>-->
<!--    <div style="height: 100%; margin-top: 10%">-->
<!--      <el-card class="box-card">-->
<!--        <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">-->
<!--          <h3 class="login-title">欢 迎 登 录</h3>-->
<!--          <el-form-item label=" 账号" prop="d_id">-->
<!--            <el-input prefix-icon="el-icon-user" type="text" placeholder="请输入账号" v-model="form.d_id"/>-->
<!--          </el-form-item>-->
<!--          <el-form-item label=" 密码" prop="password">-->
<!--            <el-input prefix-icon="el-icon-lock" show-password type="password" placeholder=" 请输入密码" v-model="form.password"/>-->
<!--          </el-form-item>-->
<!--          <el-form-item>-->
<!--            <el-button style="width:100%;" type="primary" v-on:click="onSubmit()">登录</el-button>-->
<!--            <router-link style="float: left" to="/register">注册账号</router-link>-->
<!--            <router-link style="float: right" to="/register">忘记密码</router-link>-->
<!--          </el-form-item>-->

<!--        </el-form>-->
<!--        &lt;!&ndash;      <el-dialog&ndash;&gt;-->
<!--        &lt;!&ndash;        title="温馨提示"&ndash;&gt;-->
<!--        &lt;!&ndash;        :visible.sync="dialogVisible"&ndash;&gt;-->
<!--        &lt;!&ndash;        width="30%"&ndash;&gt;-->
<!--        &lt;!&ndash;        :before-close="handLeClose">&ndash;&gt;-->
<!--        &lt;!&ndash;        <span>请输入账号和密码</span>&ndash;&gt;-->
<!--        &lt;!&ndash;        <span slot="footer" class="dialog- footer">&ndash;&gt;-->
<!--        &lt;!&ndash;        <el-button type="primary" @click="dialogVisible = false">确定</el-button>&ndash;&gt;-->
<!--        &lt;!&ndash;      </span>&ndash;&gt;-->
<!--        &lt;!&ndash;      </el-dialog>&ndash;&gt;-->
<!--      </el-card>-->
<!--    </div>-->
<!--  </div>-->

</template>

<script>
import axios from "axios";
import qs from "qs";
import working from '../assets/woking.gif';
export default {
  name: "Login",
  data() {
    return {
      working: working,
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
            console.log(resp.data)
            if(resp.data.code === 200) {
              this.$router.push({path: '/start', params: {
                authority: resp.data.authority
                }})
            } else{
              this.$alert(resp.data.message, '提示', {
                confirmButtonText: '确定'
              })
            }
          })
          // axios.get('/doctorLogin?id='+this.form.d_id+'&pwd='+this.form.password).then(resp => {
          //     // Console.log(resp)
          //     if(resp.data.code === 200){
          //       this.$router.push({path:'/index'})
          //     } else {
          //       console.log(resp.data.message)
          //     }
          // })
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

.container{
  position: relative;
  background-image:linear-gradient(90deg, #ebebeb, #f5f7f6);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-container{
  width:874px;
  min-width: 874px;
  height: 78%;
  min-height: 600px;
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  border-radius: 10px;
  overflow: hidden;
  background-color :white;
  box-shadow:0 0 20px 5px rgba(34,84,142,.26);
}
.login-left{
  width:50%;
  padding:47px 54px;
}
.top{
  display:flex;
  flex-direction:column;
  justify-content :flex-start;
  align-items :flex-start;
  margin:40px 0px;
}
.title{
  font-size: 32px;
  margin-bottom: 16px;

}
.desc{
  font-size: 28px;
  text-align: left;
  color: rgb(166,175,188);
}
.login-right{
  width:50%;
  display:flex;
  flex-direction:column ;
  justify-content: center;
  align-items :center;
  padding:30px;

}
.btn-container{
  width:100%;
  display :flex;
  flex-direction:row;
  justify-content :flex-start;
  align-items :center;
}
img{
  width: 100%;
  height: auto;
  margin: 0px 20px;
}
</style>
