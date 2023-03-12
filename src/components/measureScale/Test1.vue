<template>
  <div>
<!--月龄-->
    <span>选择月龄： </span>
    <el-select v-model="value1" filterable placeholder="月 龄">
      <el-option
        v-for="item in optionsAge"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
<!--检测项目-->
    <span style="margin-left: 10%">选择评估项目： </span>
    <el-select v-model="value2" filterable placeholder="全部项目">
      <el-option
        v-for="item in optionsProject"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button v-on:click="searchProject()">查询</el-button>
    <div style="width: 100%;height: 0.5px;background-color: #96b1de;margin-top: 20px"></div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="项目内容">
              <span>{{ props.row.explain }}</span>
            </el-form-item>
            <el-form-item label="评分标准">
              <span>0, 1, 2</span>
            </el-form-item>
            <el-form-item label="评分0">
              <span>{{ props.row.s0 }}</span>
            </el-form-item>
            <el-form-item label="评分1">
              <span>{{ props.row.s1 }}</span>
            </el-form-item>
            <el-form-item label="评分2">
              <span>{{ props.row.s2 }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="月龄"
        prop="age">
      </el-table-column>
      <el-table-column
        label="项目类别"
        prop="projectID">
      </el-table-column>
      <el-table-column
        label="项目名"
        prop="project">
      </el-table-column>
    </el-table>


  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "peabody",
  data() {
    return {
      optionsAge: [{
        value: '1',
        label: '0'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '4',
        label: '4'
      }, {
        value: '5',
        label: '5'
      }, {
          value: '6',
          label: '6'
        },{
        value: '7',
        label: '7'
      }],

      optionsProject: [{
        value: '1',
        label: '反    射'
      }, {
        value: '2',
        label: '姿    势'
      }, {
        value: '3',
        label: '运    动'
      }, {
        value: '4',
        label: '实物操作'
      }, {
        value: '5',
        label: '全部项目'
      }],
      value1: '',
      value2: '',

      tableData: [],
    }
  },
  methods: {
    searchProject() {
      axios.post("/searchAllProject").then(resp => {
        this.$router.push({path: '/index'})
        // this.tableData = resp.data
      })
    }
  }
}
</script>
<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 100px;
  color: #6b95cd;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}
</style>
<style scoped>

</style>
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
