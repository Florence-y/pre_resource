import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const AppVue = createApp(App)
AppVue.use(router).use(ElementPlus).mount('#app')

AppVue.config.globalProperties.$userInf = {
    number: null,
    name: null
};