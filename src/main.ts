import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import posthogPlugin from "./plugins/posthog";

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import {createHead} from '@vueuse/head'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(createHead())
app.use(posthogPlugin)
app.mount('#app')