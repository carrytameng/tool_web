<template>
  <div class="string-length-box">
    <el-input
      type="textarea"
      :rows="24"
      placeholder="请输入要计算长度的字符串"
      v-model.trim="str"
      @input="count"
    ></el-input>
    <el-input v-model="str_length" placeholder="字符串长度" style="margin-top:20px;"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: '',
      str_length: 0
    }
  },
  methods: {
    count() {
      this.str_length = this.str.length
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
