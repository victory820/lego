import { Module } from 'vuex';
import { GlobalDataProps } from './index';

export interface UserProps {
  isLogin: boolean;
  userName?: string;
}

const user: Module<UserProps, GlobalDataProps> = {
  mutations: {
    login (state) {
      state.isLogin = true
      state.userName = 'admin'
    },
    logout (state) {
      state.isLogin = false
      state.userName = ''
    }
  },
  getters: {
    getUser: (state) => {
      return {
        isLogin: state.isLogin,
        userName: state.userName
      }
    },
  }
}

export default user;
