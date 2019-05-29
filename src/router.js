import VueRouter from 'vue-router'

import home from '../src/pages/home/index.vue'
import homeLogin from './pages/login/index.vue'

import search from '../src/pages/search/index.vue'
import hot from '../src/pages/hot/index.vue'
import makeup from '../src/pages/makeup/index.vue'


const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {
            path: '/home', component: home,
            children: [
                {name: 'home-login', path: 'login', component: homeLogin}]
        },
        {path: '/search', redirect: '/search/连衣裙'},
        {path: '/search/:name', component: search},
        {path: '/hot', component: hot},
        {path: '/makeup', component: makeup},
        {path: '/maternalProducts', component: home},
        {path: '/international', component: home},
        {path: '/household', component: home}

    ]
});

export default router
