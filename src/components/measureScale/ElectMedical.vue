<template>
  <div>
    <div style="margin-top: 20px; width: 100%">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/searchPatient' }">患者管理</el-breadcrumb-item>
        <el-breadcrumb-item>电子病历</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div style="margin-top: 20px; text-align: left" >
      <el-card shadow="None">
<!--        <b style="margin-left: 45%">检索病历</b>-->
        <div>
          <b>输入病历内容：</b>
          <el-input type="textarea" :rows="6" v-model="description" style="font-size: 16px;margin-top: 10px"></el-input>
        </div>
        <div style="margin-top: 20px">
          <b>特征标签选择： </b>
          <el-checkbox v-model="c1" label="右下肢肌张力降低" border></el-checkbox>
          <el-checkbox v-model="c2" label="右下肢跛行" border></el-checkbox>
          <el-checkbox v-model="c3" label="右下肢肌力降低" border></el-checkbox>
          <el-checkbox v-model="c4" label="四肢强直" border></el-checkbox>
          <el-checkbox v-model="c5" label="运动落后" border></el-checkbox>
          <el-checkbox v-model="c6" label="发育落后" border></el-checkbox>
          <el-checkbox v-model="c7" label="不能翻身" border></el-checkbox>
        </div>

        <div style="margin-top: 20px">
          <el-checkbox v-model="c8" label="肌力增高" border></el-checkbox>
          <el-checkbox v-model="c9" label="粗大运动落后" border></el-checkbox>
          <el-checkbox v-model="c10" label="精细运动落后" border></el-checkbox>
          <el-checkbox v-model="c11" label="双上肢强直" border></el-checkbox>
          <el-checkbox v-model="c12" label=" 双下肢强直" border></el-checkbox>
          <el-checkbox v-model="c13" label="双上肢痉挛" border></el-checkbox>
          <el-checkbox v-model="c14" label="走路异常" border></el-checkbox>
          <el-checkbox v-model="c15" label="双足内旋" border></el-checkbox>
        </div>
        <vs-button border style="float: left; width: 150px; margin-left: 42%; margin-top: 20px">开始检索</vs-button>
        <br><br><br>
        <el-divider></el-divider>
        <div style="margin-top: 5px">
          <b style="margin-top: 10px; float: left;">检索结果 </b>
        </div>
        <div style="margin-top: 30px; margin-left: 20%">
          <el-table
            :data="tableData"
            border
            style="width: 60%">
            <el-table-column
              prop="id"
              label="病历编号"
              align="center"
              width="180">
            </el-table-column>
            <el-table-column
              prop="similarity"
              align="center"
              label="相似度">
            </el-table-column>
            <el-table-column
              label="操作"
              align="center">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="primary"
                  @click="OpenReport(scope.$index)">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>

  </div>
</template>

<script>
export default {
  name: "ElectMedical",
  data() {
    return {
      description: '',
      tableData: [
        {
          id: 623618,
          similarity: '83.2%'
        },
        {
          id: 582013,
          similarity: '61.8%'
        }
      ]
    }
  },
  methods: {
    OpenReport(index) {
      this.$router.push({path: '/recordDetail', query: {
          id: this.tableData[index].id,
        }})
      // this.$router.replace('/medicalRecord')
    }
  }
}
</script>

<style scoped>

</style>
