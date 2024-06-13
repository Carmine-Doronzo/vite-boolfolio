import { createApp } from 'vue'
import './style/general.scss'
import { createWebHistory,createRouter } from 'vue-router'
import App from './App.vue'

// Javascript di Bootstrap
import * as bootstrap from 'bootstrap';

import AppHome from './pages/AppHome.vue'
import AppPortfolio from './pages/AppPortfolio.vue'
import AppContact from './pages/AppContact.vue'
import AppShow from './pages/AppShow.vue'

const routes = [
    { path:'/',name:'home',component:AppHome },
    { path:'/portfolio',name:'portfolio',component:AppPortfolio },
    { path:'/contact',name:'contact',component:AppContact },
    { path:'/portfolio/:slug',name:'show',component:AppShow },
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes
})

createApp(App).use(router).mount('#app')
