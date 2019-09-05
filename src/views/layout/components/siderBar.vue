<template>
    <el-menu :default-active="menuActive" class="el-menu-vertical-demo" @dpen="handleOpen" @close="handleClose" :collapse="isCollapse">
      <router-link v-for="(item, index) in siderItem" :key="index" :to="`/${item.path}`">
        <el-menu-item :index="item.meta.menu_key">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </router-link>
    </el-menu>
</template>
<script>
import { constantRouterMap } from '@/router/routers.js'
export default {
  data() {
    return {
      isCollapse: true,
      siderItem: [],
      menuActive: ''
    }
  },
  mounted() {
    this.siderItem = constantRouterMap[0].children
    this.menuActive = this.$route.meta.menu_key
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  watch: {
    $route(value) {
      console.log('------', value)
      this.menuActive = value.meta.menu_key
    }
  },
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
