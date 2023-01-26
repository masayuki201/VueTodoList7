import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from './store/index.ts';
import router from './router/index.js'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
