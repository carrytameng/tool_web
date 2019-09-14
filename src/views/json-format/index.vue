<template>
  <div class="string-length-box">
    <el-row>
    <el-col :span="12">
      <el-input
        type="textarea"
        :rows="28"
        placeholder="请输入要格式化的json字符串"
        v-model.trim="json"
        @input="format"
      ></el-input>
    </el-col>
    <el-col :span="12">
      <el-input
        type="textarea"
        :rows="28"
        placeholder="格式化后的json"
        v-model.trim="json_format"
      ></el-input>
    </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      json: '',
      json_format: ''
    }
  },
  methods: {
    format() {
      this.json_format = JSON.stringify(JSON.parse(this.json), null, 4)
    }
  }
}
</script>

<style>
.string-length-box {
  width: 80%;
  margin: 0px auto;
}
</style>
