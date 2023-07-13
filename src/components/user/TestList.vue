<template>
  <div>
    <div style="width: 100%;">
      <div style="margin-top: 20px; margin-bottom: 20px; width: 100%">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/searchPatient' }">患者管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'/searchPatient'}">患者查询</el-breadcrumb-item>
          <el-breadcrumb-item>病历报告</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div>
      <el-card shadow="None">
        <h3 style="text-align: left">病历报告</h3>
        <el-row>
          <el-col :span="8"><b>患者ID:</b> {{patientID}}</el-col>
          <el-col :span="8"><b>姓名:</b> {{patientName}}</el-col>
          <el-col :span="8"><b>性别:</b> {{patientSex === 1? '男' : '女'}}</el-col>
        </el-row>
        <el-divider></el-divider>
        <el-table
          :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%">
          <el-table-column
            label="检查日期"
            sortable
            prop="date">
          </el-table-column>
          <el-table-column
            label="项目名"
            prop="name">
          </el-table-column>
          <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="OpenReport(scope.$index)">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>


  </div>

</template>

<script>
export default {
  name: "TestList",
  data() {
    return {
      tableData: [{
        date: '2023-5-24',
        name: '运动能力分析',
      },
        {
          date: '2023-5-28',
          name: '运动能力分析',
        }],
      search: '',
      patientID: '51018319990708292X',
      patientName: '庞巧芳',
      patientSex: '1'
    }
  },
  methods: {
    OpenReport(index) {
      this.$router.push({path: '/medicalRecord', query: {
          patientID: this.patientID,
          patientName: this.patientName,
          patientSex: this.patientSex === 1? '男' : '女',
          testDate: this.tableData[index].date
        }})
      // this.$router.replace('/medicalRecord')
    }
  }
}
</script>

<style scoped>

</style>
