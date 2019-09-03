<template>
  <div>
    <el-row>
        <el-col :span="18">
            <el-input type="textarea" :rows="24" placeholder="请输入要计算长度的字符串" v-model="str" @input="count"></el-input>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="18">
            <el-input v-model="str_length" placeholder="字符串长度"></el-input>
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