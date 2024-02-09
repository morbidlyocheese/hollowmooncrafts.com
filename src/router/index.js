import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/home',
            redirect: { name: 'home' },
            
        },
        { 
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutUs.vue')
        },
        { 
            path: '/contact',
            name: 'contact',
            component: () => import('../views/Contact.vue')
        },
        { 
            path: '/gallery',
            name: 'gallery',
            component: () => import('../views/Gallery.vue')
        },
    ]
})

export default router