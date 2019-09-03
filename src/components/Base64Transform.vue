<template>
  <div>
    <el-row>
        <el-col :span="18">
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
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="18">
          <el-input type="textarea" :rows="18" placeholder="base64转换结果" v-model="info"></el-input>
        </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data() {
      return {
        str: '',
        str_length: 0,
        info: '',
      }
  },
  methods: {
      count: function() {
          this.str_length = this.str.length;
      }
  }
};
</script>

<style>
.el-row {
    margin-bottom: 20px;
}
</style>