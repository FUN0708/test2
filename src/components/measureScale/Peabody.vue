<template>
  <div>
    <el-row>
      <el-col :span="4" style="margin-top: 10px; color: #4b8bea;">Peabody量表检测项目：</el-col>
      <el-col :span="7">
        <!-- 搜索与添加区域 -->
        <el-input type="text" placeholder="请输入月龄" v-model="inputAge">
          <el-button slot="append" icon="el-icon-search" v-on:click="getProjectByAge()"></el-button>
        </el-input>
      </el-col>
    </el-row>
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
      <el-table-column prop="age" label="月龄" width="50"></el-table-column>
      <el-table-column prop="category" label="量表类别"  width="100"></el-table-column>
      <el-table-column prop="type" label="项目类别"  width="100"></el-table-column>
      <el-table-column prop="project" label="项目名"  width="300"></el-table-column>
      <el-table-column prop="explain" label="项目内容"></el-table-column>
      <el-table-column prop="s0" label="评分0" v-if="false"></el-table-column>
      <el-table-column prop="s1" label="评分1" v-if="false"></el-table-column>
      <el-table-column prop="s2" label="评分2" v-if="false"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Test",
  data() {
    return {
      queryInfo: {
        age: 0
      },
      inputAge: '',
      projectList: []
    }
  },
  created() {
    this.getProject();
  },
  methods: {
    async getProject() {
      axios.post("/peabody/searchAllProject", {
      }).then(resp =>
        this.projectList = resp.data
        // console.log(resp)
      );
    },
    getProjectByAge() {
      axios.post("/peabody/searchProjectByTypeAndAge?age="+this.inputAge+"&type=6", {
      }).then(resp =>
      this.projectList = resp.data)
    },
    indexMethod(index) {
      return index + 1;
    }

  }
}
</script>

<style scoped>

</style>
