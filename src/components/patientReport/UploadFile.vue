<template>
  <div>
    <p>检测项目：</p>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>

  </div>

</template>

<script>
export default {
  name: "UploadFile",
  data() {
    return {
      options: [{
        value: 'gait',
        label: '步态数据'
      }, {
        value: 'action',
        label: '平衡数据'
      }],
      value: ''
    }
  }
}
</script>

<style scoped>

</style>
