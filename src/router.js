import VueRouter from 'vue-router'
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

const router = new VueRouter({
    routes: [
        {path: '/account', component: account},
        {path: '/goodlist', component: goodslist}
    ]
});

export default router
