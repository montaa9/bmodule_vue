import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './css/index.css'
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://localhost:8000/api/v1'

createApp(App).use(router).use(VueAxios, axios).mount('#app')
