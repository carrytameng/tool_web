<template>
    <el-menu default-active="1" class="el-menu-vertical-demo" @dpen="handleOpen" @close="handleClose" :collapse="isCollapse">
      <router-link to="/company">
        <el-menu-item index="1">
            <i class="el-icon-search"></i>
            <span slot="title">企业信息查询</span>
        </el-menu-item>
      </router-link>
      <router-link to="/stringLength">
        <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">字符串长度计算</span>
        </el-menu-item>
      </router-link>
      <router-link to="/base64Transform">
        <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">图片Base64转换</span>
        </el-menu-item>
      </router-link>
    </el-menu>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu-item {
  background-color: #d3dce6;
}
.el-menu {
  background-color: #d3dce6;
  height: 100%;
}
</style>
