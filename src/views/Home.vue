<template>
  <template-list :templates="templates"></template-list>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { GlobalDataProps } from '../store/index';
import TemplateList from './TemplateList.vue';

export default defineComponent({
  name: 'App',
  components: {
    TemplateList
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const templates = computed(() => store.state.templates)
    return {
      templates
    }
  }
});
</script>
<style lang="less" scoped>
  .content {
    height: 100%;
    padding: 20px 20px;
  }
  .list-item {
    margin-top: 20px;
    .cover-box {
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        transform: scale(1);
      }
      &:hover {
        img {
          transform: scale(1.2);
        }
      }
      .hover-box {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        button {
          display: none;
        }
        &:hover {
          background-color: rgba(0, 0, 0, .5);
          display: flex;
          justify-content: center;
          align-items: center;
          button {
            display: block;
          }
        }
      }
    }
  }
</style>
