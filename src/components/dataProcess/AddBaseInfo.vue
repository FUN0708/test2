<template>
  <div>

    <div style="margin-top: 20px; width: 100%">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/searchPatient' }">患者管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/addTest' }">新增检查</el-breadcrumb-item>
        <el-breadcrumb-item>新建患者档案</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h2>新 建 患 者 检 查 信 息</h2>
    <p></p>

<!--    <div style="margin-bottom: 50px; width: 95%; margin-left: 2%" >-->
<!--      <el-steps :active="active" style="text-align: left">-->
<!--        <el-step title="填写患者检查信息" icon="el-icon-edit"></el-step>-->
<!--        <el-step title="上传运动数据文件" icon="el-icon-upload"></el-step>-->
<!--        <el-step title="上传肌电数据文件" icon="el-icon-upload"></el-step>-->
<!--        <el-step title="上传视频数据文件 " icon="el-icon-upload"></el-step>-->
<!--      </el-steps>-->
<!--      <el-button style="margin-top: 12px;" @click="up">上一步</el-button>-->
<!--      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>-->
<!--    </div>-->

    <div v-if="active === 1">
      <p style="text-align: left"><b>检查信息</b></p>
      <el-form label-position="left" ref="form" :model="form" label-width="120px" style="margin-top: 30px; text-align: left">
        <el-form-item label="患者身份证号： ">
          <el-input v-model="form.id"></el-input>
        </el-form-item>

        <el-row>
          <el-col :span="7">
            <el-form-item label="检测日期 ： " >
              <el-col >
                <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd"
                                v-model="form.testDate" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :span="5" style="margin-left: 20px">
            <el-form-item label="月龄(月)： ">
              <el-col>
                <el-input-number v-model="form.age" :min="1" :max="100" size="small"></el-input-number>
              </el-col>
            </el-form-item>
          </el-col>

          <el-col :span="5" style="margin-left: 20px">
            <el-form-item label="身 高(cm)： ">
              <el-col >
                <el-input-number v-model="form.height" :min="1" :max="100" size="small"></el-input-number>
              </el-col>
            </el-form-item>
          </el-col>

          <el-col :span="5">
            <el-form-item label="体 重(kg)： ">
              <el-col >
                <el-input-number v-model="form.weight" :min="1" :max="100" size="small"></el-input-number>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
        <el-col :span="11">
          <el-form-item label="检测医院： " style="margin-right: 100px">
            <el-col >
              <el-input v-model="form.hospital" ></el-input>
            </el-col>
          </el-form-item>
        </el-col>

          <el-col :span="11">
            <el-form-item label="检测人员： " >
              <el-col >
                <el-input v-model="form.inspector" ></el-input>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="病情描述： ">
          <el-col >
            <el-input type="textarea" v-model="form.illness" style="font-size: 20px;"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="检查描述 ： ">
          <el-input type="textarea" v-model="form.describe" style="font-size: 20px"></el-input>
        </el-form-item>
      </el-form>
      <vs-button relief type="primary" @click="saveBaseInfo" style="margin-left: 30%; width: 200px; float: left"> 提交保存 </vs-button>
      <vs-button relief type="primary" @click="nextStep" style="margin-left: 5%; width: 200px; float: left"> 下一步 </vs-button>
    </div>

<!--    <div v-if="active === 2">-->
<!--      <GaitUpload :id="this.form.id" :testDate="form.testDate"></GaitUpload>-->
<!--    </div>-->

<!--    <div v-if="active === 3">-->
<!--      <EmgUpload></EmgUpload>-->
<!--    </div>-->

<!--    <div v-if="active === 4">-->
<!--      <VideoUpload></VideoUpload>-->
<!--    </div>-->

  </div>
</template>
<script>
import GaitUpload from "./GaitUpload";
import VideoUpload from "./VideoUpload";
import EmgUpload from "./EmgUpload";
import axios from "axios";

export default {
  // components: {EmgUpload, VideoUpload, GaitUpload},
  data() {
    return {
      fileList: [],
      form: {
        id: '',
        region: '',
        testDate: '',
        describe: '',
        age: 1,
        weight: 1,
        height: '',
        illness: '',
        hospital: '',
        inspector: ''
      },
      active: 1
    }
  },
  methods: {
    uploadData(file) {
      // 打印file，帮助我们了解我们需要的参数
      console.log(file);
      const isExcel = file.name.split('.')[1] === 'docx' || file.name.split('.')[1] === 'doc' || file.name.split('.')[1] === 'pdf';
      const isSize = file.size / 5024 / 5024 < 1;
      if (!isExcel) {
        this.$message({
          message: '只能上传doc或docx文件或pdf!',
          type: 'error',
        });
      }
      if (!isSize) {
        this.$message({
          message: '上传文件大小不能超过 5MB!',
          type: 'error',
        });
      }
      return isExcel && isSize;
    },

    saveBaseInfo() {
      axios.post('/saveCheckInfo', {
        patientID: this.form.id,
        testDate: this.form.testDate,
        age: this.form.age,
        weight: this.form.weight,
        height: this.form.height,
        illness: this.form.illness,
        describe: this.form.describe,
        hospital: this.form.hospital,
        inspector: this.form.inspector
      }).then(resp => {
        console.log(resp.data)
        if(resp.data.code === 200) {
          const data= {
            id: this.form.id,
            test_date: this.form.testDate
          };
          sessionStorage.setItem("patient", JSON.stringify(data));
          this.$alert(resp.data.message, '提示', {
            confirmButtonText: '确定'
          })
        } else{
          this.$alert(resp.data.message, '提示', {
            confirmButtonText: '确定'
          })
        }
      })
    },
    nextStep() {
      this.$router.push({
        path: '/fileUpload',
        query: {
          id: this.form.id,
          testDate: this.form.testDate
        }
        });
    }
    //
    // next() {
    //   if (this.active++ > 3) {
    //     this.active = 1;
    //   }
    // },
    // up() {
    //   if(this.active-- < 2) this.active = 1;
    // }
  }
}
</script>
