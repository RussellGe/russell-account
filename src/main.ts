import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import { DatePicker, Modal, Select } from 'ant-design-vue';

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.use(DatePicker)
app.use(Select)
app.use(Modal)
app.mount('#app')
