<template>
  <div class="upload" :style="{width: width}" @click="selectFile">
    <i class="el-icon-upload"></i>
    <div class="upload__text">
      将文件拖到此处，或<em>点击上传</em>
    </div>
  </div>
</template>
<script>
export default {
  name: 'upload',
  props: {
    width: {
      type: String,
      default: '360px'
    }
  },
  mounted() {
    let upload = document.querySelector('.upload')
    upload.addEventListener('dragenter', (e) => {
      e.preventDefault()
    }, false)
    upload.addEventListener('dragover', (e) => {
      e.preventDefault()
    }, false)
    upload.addEventListener('drop', (e) => {
      e.stopPropagation()
      e.preventDefault()
      let file = e.dataTransfer.files[0] // 获取文件
      this.img2base64(file, this.onSuccess)
    })
  },
  methods: {
    selectFile() {
      let a = document.createElement('input')
      a.type = 'file'
      a.click()
      a.onchange = (e) => {
        let file = e.target.files[0]
        this.img2base64(file, this.onSuccess)
      }
    },
    img2base64(file, cb) {
      if (!/\.(png|jpg|gif|jpeg)$/.test(file.name)) {
        this.$message({
          type: 'warning',
          message: '请选择正确格式的文件进行上传'
        })
        return false
      }
      let result = ''
      let img = new Image()
      img.src = URL.createObjectURL(file)
      img.onload = (e) => {
        let canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        let ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0)
        result = canvas.toDataURL()
        URL.revokeObjectURL(img.src)
        cb(result)
      }
    },
    onSuccess(param) {
      this.$emit('on-success', param)
    }
  }
}
</script>
<style lang="scss" scoped>
.upload {
  height: 180px;
  margin: 0px auto;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  i {
    font-size: 67px;
    color: #c0c4cc;
  }
  .upload__text {
    em {
      color: #409eff;
      font-style: normal;
    }
  }
}
</style>
