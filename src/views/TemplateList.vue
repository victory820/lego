<template>
  <a-layout-content class="content">
    <a-row :gutter="16">
      <a-col :span="6" class="list-item" v-for="item in templates" :key="item.id">
        <a-card hoverable>
          <template #cover>
            <div class="cover-box">
              <img alt="example" :src="item.coverImg" />
              <div class="hover-box">
                <router-link :to="{ name: 'template', params: { id: item.id } }">
                  <a-button size="large" type="primary">使用该模板创建</a-button>
                </router-link>
              </div>
            </div>
          </template>
          <a-card-meta :title="item.title">
            <!-- <UserOutlined /> -->
            <template #description>
              <a-row justify="space-between">
                <a-col>作者：{{item.author}}</a-col>
                <a-col><UserOutlined />{{item.copiedCount}}</a-col>
              </a-row>
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </a-layout-content>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
import { TemplateProps } from '../store/templates';

export default defineComponent({
  name: 'App',
  components: {
    UserOutlined
  },
  props: {
    templates: {
      type: Array as PropType<TemplateProps[]>,
      required: true
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
