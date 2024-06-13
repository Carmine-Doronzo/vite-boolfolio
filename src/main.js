import { createApp } from 'vue'
import './style/general.scss'
import { createWebHistory,createRouter } from 'vue-router'
import App from './App.vue'

// Javascript di Bootstrap
import * as bootstrap from 'bootstrap';

import AppHome from './pages/AppHome.vue'
import AppPortfolio from './pages/AppPortfolio.vue'

const routes = [
    { path:'/',name:'home',component:AppHome },
    { path:'/portfolio',name:'portfolio',component:AppPortfolio }
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes
})

createApp(App).use(router).mount('#app')
