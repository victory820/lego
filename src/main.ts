import './assets/styles/index.less';
import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import store from './store/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(Router).use(store).use(Antd).mount('#app')

// app.config.productionTip = false
