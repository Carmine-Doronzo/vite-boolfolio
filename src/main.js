import { createApp } from 'vue'
import './style/general.scss'
import { createWebHistory,createRouter } from 'vue-router'
import App from './App.vue'

import AppHome from './pages/AppHome.vue'

const routes = [
    { path:'/',component:AppHome }
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes
})

createApp(App).use(router).mount('#app')
