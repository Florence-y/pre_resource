import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

const AppVue = createApp(App)
AppVue.use(router).mount('#app')
