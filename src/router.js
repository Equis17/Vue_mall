import VueRouter from 'vue-router'

import home from '../src/pages/home/index.vue'
import homeLogin from './pages/login/index.vue'

import search from '../src/pages/search/index.vue'
import detail from '../src/pages/detail/index.vue'
import cart from  '../src/pages/cart/index.vue'
import hot from '../src/pages/hot/index.vue'
import makeup from '../src/pages/makeup/index.vue'


const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/search', redirect: '/home'},
        {path:'/detail',redirect:'/home'},
        {
            path: '/home', component: home,
            children: [
                {name: 'home-login', path: 'login', component: homeLogin}]
        },
        {path: '/search/:name', component: search},
        {path:'/detail/:id',component:detail},
        {path:'/cart',component:cart},
        {path: '/hot', component: hot},
        {path: '/makeup', component: makeup},
        {path: '/maternalProducts', component: home},
        {path: '/international', component: home},
        {path: '/household', component: home}

    ]
});

export default router
