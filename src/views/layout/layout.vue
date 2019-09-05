<template>
  <div class="app-wrapper">
    <siderBar class="sider-bar"></siderBar>
    <div class="main-container">
      <navBar></navBar>
			<appMain></appMain>
		</div>
  </div>
</template>
<script>
import { siderBar, appMain, navBar } from './index'
export default {
  name: 'layout',
  components: {
    siderBar,
    appMain,
    navBar
  }
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  .sider-bar {
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 666;
  }
  .main-container {
    min-height: 90%;
    transition: margin-left .28s;
    margin-left: 64px;
    top: 60px;
    position: relative;
  }
}
</style>
