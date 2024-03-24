import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue from '@vue/compat';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const app = createApp(App)

app.use(createPinia())
app.use(router)


app.mount('#app')
