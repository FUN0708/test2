<template>
  <div>
    <el-row>
      <el-col :span="5" style="margin-top: 10px; color: #4b8bea;"><b>Fugl-Meyer运动功能评定量表</b></el-col>
      <el-col :span="2" style="margin-top: 8px; color: #4b8bea;">类别：</el-col>
      <!--      <el-col :span="7">-->
      <!--        &lt;!&ndash; 搜索与添加区域 &ndash;&gt;-->
      <!--        <el-input type="text" placeholder="请输入检测类型：" v-model="inputType">-->
      <!--          <el-button slot="append" icon="el-icon-search" v-on:click="getProjectByType()"></el-button>-->
      <!--        </el-input>-->
      <!--      </el-col>-->
      <el-col :span="14" style="margin-top: 10px; color: #4b8bea;">
        <el-checkbox-group v-model="checkedList" @change="getProjectByType">
          <el-checkbox label="上肢（坐位）"></el-checkbox>
          <el-checkbox label="腕"></el-checkbox>
          <el-checkbox label="手"></el-checkbox>
          <el-checkbox label="下肢（仰卧位）"></el-checkbox>
          <el-checkbox label="坐位"></el-checkbox>
          <el-checkbox label="站位"></el-checkbox>
          <el-checkbox label="仰卧位"></el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <!--    <div style="height: 100px;">-->
    <!--      <el-checkbox-group v-model="checkedList" >-->
    <!--        <el-checkbox label="卧位与翻身"></el-checkbox>-->
    <!--        <el-checkbox label="坐位"></el-checkbox>-->
    <!--        <el-checkbox label="爬与跪"></el-checkbox>-->
    <!--        <el-checkbox label="站立位"></el-checkbox>-->
    <!--        <el-checkbox label="行走、跑、跳"></el-checkbox>-->
    <!--      </el-checkbox-group>-->
    <!--    </div>-->
    <div style="width: 100%;height: 0.5px;background-color: #96b1de;margin-top: 20px"></div>
    <el-table :data="projectList" style="width: 100%">
      <el-table-column type="expand">
        <template v-slot="props" >
          <el-form label-position="left" inline class="demo-table-expand" style="margin-left: 5%">
            <el-form-item label="评分0:" style="width: 100%">
              <span>{{ props.row.s0 }}</span>
            </el-form-item>
            <el-form-item label="评分1:"  style="width: 100%">
              <span>{{ props.row.s1 }}</span>
            </el-form-item>
            <el-form-item label="评分2:"  style="width: 100%">
              <span>{{ props.row.s2 }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column
        type="index"
        label="序号"
        :index="indexMethod">
      </el-table-column>
      <el-table-column prop="type" label="类别" width="200"></el-table-column>
      <el-table-column prop="name" label="名称"  width="300"></el-table-column>
      <el-table-column prop="content" label="内容" ></el-table-column>
      <el-table-column prop="s0" label="评分0" v-if="false"></el-table-column>
      <el-table-column prop="s1" label="评分1" v-if="false"></el-table-column>
      <el-table-column prop="s2" label="评分2" v-if="false"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Fugl_Meyer",
  data() {
    return {
      projectList: [],
      checkedList: [],
      labels: ''
    }
  },
  created() {
    this.getProject();
  },
  methods: {
    async getProject() {
      axios.post("/fuglmeyer/getAllProject", {
      }).then(resp =>
          this.projectList = resp.data
        // console.log(resp)
      );
    },
    getProjectByType(val) {
      val.forEach(item => {
        this.labels += item;
        this.labels += " "
      })
      // console.log(this.labels)
      if(this.labels.length == 0) {
        this.getProject()
      } else {
        axios.post("/fuglmeyer/getProjectByType", {
          type: this.labels
            // ?type="+this.labels
          // type: this.labels
        }).then(resp =>
          this.projectList = resp.data)
          this.labels = ""
      }

    },
    indexMethod(index) {
      return index + 1;
    }

  }
}
</script>

<style scoped>

</style>
