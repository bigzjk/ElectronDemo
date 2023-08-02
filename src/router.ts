import { createRouter, createWebHashHistory } from 'vue-router';

// @ts-nocheck
import HelloWorld from './components/HelloWorld.vue';
import Storage from './components/Storage.vue';

const routes = [
    {
        path: '/',
        component: HelloWorld,
    },
    {
        path: '/storage',
        component: Storage,
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
