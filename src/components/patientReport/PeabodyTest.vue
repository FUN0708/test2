<template>
  <div>
    <div style="width: 100%;">
      <div style="margin-top: 20px; margin-bottom: 20px; width: 100%">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/searchPatient' }">患者管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'/addTest'}">新增检查</el-breadcrumb-item>
          <el-breadcrumb-item>量表评估</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>


    <el-card>
      <h3>新增量表评估项目</h3>
      <el-row style="margin-top:30px">
        <el-col :span="8"><b>患者ID:</b> </el-col>
        <el-col :span="8"><b>患者姓名: </b></el-col>
        <el-col :span="8"><b>性别:</b> </el-col>
      </el-row>
      <el-divider style="background-color: #0a53be"></el-divider>
      <h4 style="text-align: left">量表定制</h4>
      <el-form v-model="form">
        <el-row style="margin-top: 30px">
          <el-col :span="8">
            <el-form-item label="月龄(月)： ">
                <el-input-number v-model="form.age" :min="1" :max="100" size="meduim"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="体重(月)： ">
                <el-input-number v-model="form.weight" :min="1" :max="100" size="medium"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="量表类型： ">
              <el-select v-model="form.value" placeholder="请选择量表">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
    </el-card>

  </div>
</template>

<script>
export default {
  name: "PeabodyTest",
  data(){
    return {
      form: {
        age: '',
        weight:''
      },
      options: [{
        value: '1',
        label: 'Peabody量表'
      }, {
        value: '2',
        label: 'Gesell量表'
      }],
    }
  }
}
</script>

<style scoped>

</style>
