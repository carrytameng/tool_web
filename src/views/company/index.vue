<template>
  <div class="company-box">
    <el-row :gutter="10">
      <el-col :span="6">
        <el-input v-model="keyword" placeholder="请输入企业关键字"></el-input>
      </el-col>
      <el-col :span="6">
        <el-select v-model="type" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-button size="medium" v-on:click="company" type="primary">查询</el-button>
      </el-col>
    </el-row>
    <el-input type="textarea" placeholder="查询结果" :rows="20" v-model="info" class="result-box"></el-input>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  data() {
    return {
      keyword: '',
      info: '',
      is_loading: false,
      options: [
        {
          value: '0',
          label: '列表信息'
        },
        {
          value: '1',
          label: '部分信息'
        },
        {
          value: '2',
          label: '全部信息'
        },
        {
          value: '3',
          label: '网页爬虫'
        }
      ],
      type: '3'
    }
  },
  methods: {
    company: function() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      axios.get('http://company.yifanti.com/company?keyword=' + this.keyword + '&type=' + this.type)
        .then(response => {
          if (response.status === 200) {
            this.info = JSON.stringify(response.data, null, 4)
          }
          loading.close()
        }).catch(() => {
          loading.close()
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.company-box {
  width: 80%;
  margin: 0px auto;
  .result-box {
    margin-top: 20px;
  }
}
</style>
