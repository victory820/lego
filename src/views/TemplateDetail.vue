<template>
  <a-layout class="content">
    <div class="content-box">
      <div class="content-preview">
        <img :src="template.coverImg" alt="">
      </div>
      <div class="content-edit">
        <a-row class="title">
          {{template.title}}
        </a-row>
        <a-row class="desc">
          {{template.title}}
          <!-- 这里是描述 -->
        </a-row>
        <a-row class="author">
          该模板由 {{template.author}} 创建
        </a-row>
        <a-row class="qer">
          扫一扫，手机预览
        </a-row>
        <a-row class="btns">
          <router-link to="/editor">
            <a-button class="mr10" type="primary">使用模板</a-button>
          </router-link>
          <a-button type="primary">下载图片海报</a-button>
        </a-row>
      </div>
    </div>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { GlobalDataProps } from '../store/index';
import { TemplateProps } from '../store/templates';

export default defineComponent({
  name: 'templateDetail',
  components: {},
  setup () {
    const store = useStore<GlobalDataProps>();
    const route = useRoute();
    const currentId = route.params.id as string;
    const template = computed<TemplateProps>(() => store.getters.getTemplateById(parseInt(currentId)));

    return {
      template
    }
  }
})
</script>
<style lang="less" scoped>
  .content {
    height: 100%;
  }
  .content-box {
    padding: 30px 0;
    width: 800px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    .content-preview {
      width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }
    .content-edit {
      flex: 1;
      margin-left: 5px;
      padding-left: 5px;
      border-left: 1px solid #ccc;
      .title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 10px;
      }
      .desc {
        font-size: 18px;
        margin-bottom: 10px;
      }
      .author {
        margin-bottom: 10px;
      }
      .qer {
        margin-bottom: 10px;
      }
      .bts {}
    }
  }
</style>
