import { Module } from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import { GlobalDataProps } from './index';
import { TextComponentProps } from '@/defaultProps';

export interface EditorProps {
  // 中间编辑器渲染的数组
  components: ComponentData[];
  // 选中元素,uuid
  currentElement: string;
}

export interface ComponentData {
  props: { [key: string]: any };
  // 唯一id，利用uuid生成
  id: string;
  // 业务组件库名称
  name: string;
}

export const testComponents: ComponentData[] = [
  {id: uuidv4(), name: 'l-text', props: {text: 'hello', fontSize: '18px', color: 'red', lineHeight: '1', textAlign: 'left', fontFamily: '' }},
  {id: uuidv4(), name: 'l-text', props: {text: 'hello2', fontSize: '16px', lineHeight: '2' }},
  {id: uuidv4(), name: 'l-text', props: {text: 'hello3', fontSize: '14px', actionType: 'url', url: 'https://www.baidu.com'}},
]

const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: testComponents,
    currentElement: '',
  },
  mutations: {
    addComponent (state, props: Partial<TextComponentProps>) {
      const newComponent: ComponentData = {
        id: uuidv4(),
        name: 'l-text',
        props
      }
      state.components.push(newComponent)
    },
    setActive(state, currentId: string) {
      state.currentElement = currentId
    },
    updateComponent(state, {key, value}) {
      const updatedComponent =  state.components.find((component) => component.id === state.currentElement)
      if (updatedComponent) {
        updatedComponent.props[key as keyof TextComponentProps] = value
      }
    }
  },
  getters: {
    getCurrentElement: (state) => {
      return state.components.find((component) => component.id === state.currentElement)
    }
  },
}

export default editor;
