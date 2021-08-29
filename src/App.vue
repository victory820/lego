<template>
  <div style="height: 100%;">
    <a-layout class="page" v-if="route.meta.needHeader">
      <a-layout-header>
        <my-header></my-header>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>
        <my-footer></my-footer>
      </a-layout-footer>
    </a-layout>
    <div style="height: 100%;" v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    myHeader: Header,
    myFooter: Footer
  },
  setup () {
    const route = useRoute()
    return {
      route
    }
  }
});
</script>
<style>
  #app, .page {
    height: 100%;
  }
</style>
