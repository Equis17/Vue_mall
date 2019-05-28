import VueRouter from 'vue-router'
import home from '../src/pages/home/index.vue'
import homeLogin from '../src/pages/home/login/index.vue'
import hot from '../src/pages/hot/index.vue'

import makeup from '../src/pages/makeup/index.vue'

const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: home},
        {path: '/home/login', component: homeLogin},
        {path: '/hot', component: hot},
        {path: '/makeup', component: makeup},
        {path: '/maternalProducts', component: home},
        {path: '/international', component: home},
        {path: '/household', component: home}

    ]
});

export default router
