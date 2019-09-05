<template>
  <div class="base64Transform">
    <el-upload
      class="upload-demo"
      drag
      :on-preview="handlePreview"
      :auto-upload="false"
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <el-input type="textarea" :rows="18" placeholder="base64转换结果" v-model="info" class="result-box"></el-input>
  </div>
</template>

<script>

export default {
  data() {
    return {
      str: '',
      str_length: 0,
      info: ''
    }
  },
  methods: {
    count() {
      this.str_length = this.str.length
    },
    handlePreview() {

    }
  }
}
</script>

<style lang="scss" scoped>

.base64Transform {
  width: 80%;
  margin: 0px auto;
  .result-box {
    margin-top: 20px;
  }
}
</style>
