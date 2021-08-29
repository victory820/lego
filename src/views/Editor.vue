<template>
  <div class="box">
    <a-layout class="content">
      <a-layout-sider class="component-box">Sider</a-layout-sider>
      <a-layout-content class="content-box">Content</a-layout-content>
      <a-layout-sider class="attribute-box">Sider</a-layout-sider>
    </a-layout>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'editor',
  components: {}
})
</script>
<style scoped>
  .box, .box .ant-layout, .content {
    height: 100%;
  }
  .component-box {
    background-color: blue;
  }
  .content-box {
    background-color: yellow;
  }
  .attribute-box {
    background-color: green;
  }
</style>
