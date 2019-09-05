<template>
  <div class="nav-bar">{{title}}</div>
</template>
<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  mounted() {
    this.title = this.$route.name
  },
  watch: {
    $route(value) {
      this.title = value.name
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-bar {
  width: 100%;
  height: 50px;
  background-color: #d3dce6;
  text-align: center;
  line-height: 50px;
  color: #ffffff;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 600;
}
</style>
