<template>
  <div>
    <p style="width: 30%; float: left; text-align: left"><b>项目内容</b></p>
    <el-button type="primary" plain style="float: right" v-on:click="toUploadFile()">上传检测数据</el-button>
    <el-table
      :data="tableData"
      style="width: 100%; font-size: 16px"
      :default-sort = "{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        prop="date"
        label="检 测 日 期"
        sortable
        width="400">
      </el-table-column>
      <el-table-column
        prop="name"
        label="检 测 项 目"
        sortable
        width="400">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操 作"
        style="float: right"
        :formatter="formatter">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>
<style>
</style>
<script>
export default {
  name: "CheckList",
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '姿态评估',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '步态评估',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '姿态评估',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '步态评估',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    toUploadFile(){
      this.$router.replace('/uploadFile')
    }
  }
}
</script>

<style scoped>

</style>
