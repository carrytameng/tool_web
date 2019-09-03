<template>
  <div id="app">
    <el-container style="border: 1px solid #eee">
      <el-header>
        <router-view name="Header"></router-view>
      </el-header>
      <el-container>
        <el-aside>
          <router-view name="Menu"></router-view>
        </el-aside>
        <el-main>
          <router-view name="Main"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
.el-header {
  background-color: #d3dce6;
  line-height: 60px;
}
.el-aside {
  color: #d3dce6;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0px;
  margin: 0px;
}
</style>
