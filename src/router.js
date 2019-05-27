import VueRouter from 'vue-router'
import home from '../src/pages/home/index.vue'

const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: home},
        {path: '/hot', component: home},
        {path: '/makeup', component: home},
        {path: '/maternalProducts', component: home},
        {path: '/international', component: home},
        {path: '/household', component: home}

    ]
});

export default router
