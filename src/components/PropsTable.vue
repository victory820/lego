<template>
  <div class="props-table">
    <div
      v-for="(value, key) in finalProps"
      :key="'attr' + key"
      class="prop-item"  
    >
      <span class="label" v-if="value.text">{{value.text}}</span>
      <div class="prop-component">
        <component
          :is="value.component"
          :[value.valueProp]="value.value"
          :="value.extraProps"
          @="value.events"
        >
          <template v-if="value.options">
            <component
              v-for="(option, k) in value.options"
              :key="'sub' + k"
              :is="value.subComponent"
              :value="option.value"
            >
              <render-vnode :v-node="option.text"></render-vnode>
            </component>
          </template>
        </component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, VNode } from 'vue';
import { reduce } from 'lodash';

import { PropsToForms, mapPropsToForms } from '../propsMap';
import { TextComponentProps } from '../defaultProps';

import RenderVnode from '../components/RenderVnode';

interface FormProps {
  component: string;
  subComponent?: string;
  value: string;
  extraProps?: { [key: string]: any };
  text?: string;
  options?: { text: string | VNode; value: any }[];
  valueProp: string;
  eventName: string;
  events: { [key: string]: (e: any) => void };
}

export default defineComponent({
  name: 'props-table',
  components: {
    RenderVnode
  },
  props: {
    props: {
      type: Object as PropType<TextComponentProps>,
      required: true,
    }
  },
  emits: ['change'],
  setup(props, context) {
    const finalProps = computed(() => {
      return reduce(props.props, (result, value, key) => {
        const newKey = key as keyof TextComponentProps
        const item = mapPropsToForms[newKey]
        if (item) {
          const { valueProp = 'value', eventName = 'change', initialTransform, afterTransform } = item
          const newItem: FormProps = {
            ...item,
            value: initialTransform ? initialTransform(value) : value,
            valueProp,
            eventName,
            events: {
              [eventName]: (e: any) => { context.emit('change', { key, value: afterTransform ? afterTransform(e) : e }) }
            }
          }
          result[newKey] = newItem
        }
        return result
        // 下面required是为了消除类型报错
      }, {} as { [key: string]: FormProps })
    })

    return {
      finalProps
    }
  },
})
</script>
<style lang="less">
  .prop-item {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    .label {
      width: 28%;
    }
    .prop-component {
      width: 70%;
    }
  }
</style>
