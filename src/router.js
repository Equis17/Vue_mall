import VueRouter from 'vue-router'
import homeComponent from "./pages/home/homeComponent.vue";
import searchComponent from "./pages/search/searchComponent.vue";
import cartComponent from "./pages/cart/cartComponent.vue";
import infoComponent from "./pages/info/infoComponent.vue";
import newsList from "./pages/home/newsList.vue"

const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: homeComponent},
        {path: '/search', component: searchComponent},
        {path: '/cart', component: cartComponent},
        {path: '/info', component: infoComponent},
        {path: '/home/newslist', component: newsList}
    ]
});

export default router
