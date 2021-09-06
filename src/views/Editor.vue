<template>
  <a-layout class="content">
    <a-layout-sider class="component-box" width="300">
      <components-list :list="defaultTextTemplates" @onItemClick="addItem"></components-list>
    </a-layout-sider>
    <a-layout-content class="content-box">
      <p>画布区域</p>
      <div class="preview-list" id="canvas-area">
        <edit-wrapper
          v-for="component in components"
          :key="component.id"
          :id="component.id"
          :active="component.id === (currentElement && currentElement.id)"
          @setActive="setActive"
        >
          <component
            :is="component.name"
            v-bind="component.props"
          ></component>
        </edit-wrapper>
      </div>
    </a-layout-content>
    <a-layout-sider class="attribute-box" width="300">
      组件属性
      <props-table
        v-if="currentElement && currentElement.props"
        :props="currentElement.props"
        @change="handleChange"
      ></props-table>
      <pre>{{ currentElement && currentElement.props}}</pre>
    </a-layout-sider>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from 'vuex';
import { GlobalDataProps } from '../store/index';

import LText from '../components/LText.vue';
import ComponentsList from "../components/ComponentsList.vue";
import EditWrapper from '../components/EditWrapper.vue';
import PropsTable from '../components/PropsTable.vue';

import { defaultTextTemplates } from '../defaultTemplates';
import { ComponentData } from '../store/editor';

export default defineComponent({
  name: 'editor',
  components: {
    LText,
    ComponentsList,
    EditWrapper,
    PropsTable,
  },
  setup () {
    const store = useStore<GlobalDataProps>()

    const components = computed(() => store.state.editor.components)
    const currentElement = computed<ComponentData | null>(() => store.getters.getCurrentElement)

    const addItem = (props: any) => {
      store.commit('addComponent', props)
    }
    const setActive = (id: string) => {
      store.commit('setActive', id)
    }
    const handleChange = (e: any) => {
      store.commit('updateComponent', e)
    }

    return {
      components,
      defaultTextTemplates,
      addItem,
      setActive,
      currentElement,
      handleChange,
    }
  }
})
</script>
<style scoped>
  .ant-layout, .content {
    height: 100%;
  }
  .component-box {
    background-color: #fff;
  }
  .content-box {
    padding: 10px;
    background-color: #eee;
  }
  .attribute-box {
    background-color: #fff;
  }
</style>
