<template>
  <div class="base64-transform">
    <!-- <el-upload
      class="upload-demo"
      drag
      :on-preview="handlePreview"
      :auto-upload="false"
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload> -->
    <upload @on-success="onsuccess"></upload>
    <div class="oper-area">
      <el-button type="primary" size="small" @click="clearBtn">清空</el-button>
      <el-button type="primary" size="small" @click="copyBtn">复制</el-button>
    </div>
    <el-input type="textarea" :rows="18" placeholder="base64转换结果" v-model="info" class="result-box"></el-input>
  </div>
</template>

<script>
import upload from '@/components/upload'
export default {
  data() {
    return {
      info: ''
    }
  },
  methods: {
    onsuccess(param) {
      this.info = param
    },
    clearBtn() {
      this.info = ''
    },
    copyBtn() {
      this.copyText(this.info)
    },
    copyText(text) {
      let input = document.createElement('input')
      input.style.display = 'hidden'
      input.value = text // 修改文本框的内容
      document.body.appendChild(input)
      input.select() // 选中文本
      document.execCommand('copy') // 执行浏览器复制命令
      document.body.removeChild(input)
    }
  },
  components: {
    upload
  }
}
</script>

<style lang="scss" scoped>

.base64-transform {
  width: 80%;
  margin: 0px auto;
  .oper-area {
    margin-top: 20px;
    text-align: right;
  }
  .result-box {
    margin-top: 20px;
  }
}
</style>
