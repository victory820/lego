import { Module } from 'vuex';
import { GlobalDataProps } from './index';

export interface TemplateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copiedCount: number;
}

const testData: TemplateProps[] = [
  {id: 1, title: 'test1', coverImg: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', author: 'author1', copiedCount: 1 },
  {id: 2, title: 'test2', coverImg: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', author: 'author2', copiedCount: 2 },
  {id: 3, title: 'test3', coverImg: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', author: 'author3', copiedCount: 3 },
  {id: 4, title: 'test4', coverImg: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', author: 'author4', copiedCount: 4 },
  {id: 5, title: 'test5', coverImg: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', author: 'author5', copiedCount: 5 },
]

export interface TemplatesProps {
  data: TemplateProps[];
}

const templates: Module<TemplatesProps, GlobalDataProps> = {
  state: {
    data: testData
  },
  getters: {
    getTemplateById: (state) => (id: number) => {
      return state.data.find(item => item.id === id)
    }
  }
}

export default templates;
