<template>
  <div>
    <div style="text-align: left">
      <lable>运动模式： </lable>
      <el-select v-model="value" placeholder="请选择检查项目">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <lable style="margin-left: 50px">文件序号： </lable>
      <el-input style="width: 200px" v-model="video_index"></el-input>
    </div>

    <el-card header="运动视频数据" style="height: 45vh; margin-top: 30px" shadow="never">

      <div>
        <el-upload
          class="upload_btn"
          ref="upload"
          action="string"
          accept=".mp4"
          :limit="1"
          :show-file-list="true"
          :file-list="fileList"
          :auto-upload="false"
          :before-upload="beforeVideoUpload"
          style="float: left; margin-left: 30%"
        >
          <vs-button border slot="trigger" type="primary" @click="submitVideo" style=" width: 220px">选取文件</vs-button>
        </el-upload>
        <vs-button border type="primary" @click="saveVideo" style="margin-bottom: 30px; width: 220px; float:left;"> 提交保存 </vs-button>
<!--        <vs-button border type="primary" @click="saveVideo" style="margin-bottom: 30px; margin-left: 42%; width: 220px"> 提交保存 </vs-button>-->
        <el-alert
          v-model="videosuccess"
          title="视频数据上传成功"
          type="success"
          center
          v-show="videosuccess === true"
          show-icon>
        </el-alert>

        <el-alert
          v-model="videofail"
          title="视频数据上传失败，请重新上传"
          type="error"
          center
          v-show="videofail === true"
          show-icon>
        </el-alert>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "VideoUpload",
  data() {
    return {
      video_index: '',
      value: '',
      options: [{
        value: '1',
        label: '直行模式'
      }, {
        value: '2',
        label: '跨步模式'
      }, {
        value: '3',
        label: '8字模式'
      }],
      videosuccess: '',
      videofail: '',
    }
  },
  methods: {
    saveVideo() {
      this.videosuccess = true
    },
  }
}
</script>

<style scoped>

</style>
