import VueRouter from 'vue-router'
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'
import login from './components/login.vue'
import register from './components/register.vue'

const router = new VueRouter({
    routes: [
        {
            path: '/account', component: account,
            children: [
                {path: 'login', component: login},
                {path: 'register', component: register}
            ]
        },
        {path: '/goodlist', component: goodslist}
    ]
});

export default router
