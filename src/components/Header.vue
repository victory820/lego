<template>
  <div>
    <a-row justify="space-between">
      <a-col>
        <router-link to="/">
          乐高项目
        </router-link>
      </a-col>
      <a-col>
        <a-button v-if="!user.isLogin" type="primary" @click="login">登录</a-button>

        <a-dropdown v-if="user.isLogin">
          <a class="ant-dropdown-link" @click.prevent>
            {{ user.userName }}
            <DownOutlined />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;" @click="logout">退出</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { DownOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { GlobalDataProps } from '../store/index';

export default defineComponent ({
  name: 'myHeader',
  components: {
    DownOutlined,
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const router = useRouter()
    const user = computed(() => {
      return store.getters.getUser
    })

    function login () {
      store.commit('login')
      message.success('登录成功');
    }

    function logout () {
      store.commit('logout')
      message.success('退出登录成功');
      setTimeout(() => {
        router.push('/')
      }, 1500)
    }

    return {
      user,
      login,
      logout
    }
  }
})
</script>
