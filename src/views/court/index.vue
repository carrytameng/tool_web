<template>
  <div class="company-box">
    <el-row :gutter="10">
      <el-col :span="6">
        <el-input v-model="name" placeholder="请输入被执行人姓名/名称"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input v-model="cardNum" placeholder="请输入身份证号码/组织机构代码"></el-input>
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
        <el-button size="medium" v-on:click="query" type="primary">查询</el-button>
      </el-col>
    </el-row>
    <el-input type="textarea" placeholder="查询结果" :rows="20" v-model="info" class="result-box"></el-input>
  </div>
</template>

<script>
import { courtblacklist } from '@/api/courtblacklistApi'
export default {
  data() {
    return {
      name: '',
      cardNum: '',
      info: '',
      options: [
        {
          value: 0,
          label: '列表信息'
        },
        {
          value: 1,
          label: '详情信息'
        }
      ],
      type: 0,
    }
  },
  methods: {
    query: function() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      courtblacklist('http://court.yifanti.com/zhixing', {
        name: this.name,
        cardNum: this.cardNum
      }).then(res => {
        if (res.status === 200) {
          this.info = JSON.stringify(res.data, null, 4)
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
