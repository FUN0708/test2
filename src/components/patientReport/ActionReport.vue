<template>
  <el-table
    ref="filterTable"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180"
      column-key="date"
      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="检测项目"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="评估得分"
      width="180">
    </el-table-column>
    <el-table-column
      prop="advise"
      label="康复建议"
      >
    </el-table-column>
    <el-table-column
      prop="tag"
      label="操作"
      width="100"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '详情' ? 'primary' : 'success'"
          disable-transitions>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "ActionReport",
  data() {
    return {
      tableData: [{
        date: '2022-10-27',
        name: '单脚站',
        address: '2',
        advise: '当小儿可以双脚靠拢站立平衡后，让他站在两个相靠的脚印上，或两个一前一后脚跟...',
        tag: '详情'
      }]
    }
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('date');
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    }
  }
}
</script>

<style scoped>

</style>
