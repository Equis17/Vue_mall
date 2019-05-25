import VueRouter from 'vue-router'
import homeComponent from "./pages/homeComponent.vue";
import searchComponent from "./pages/searchComponent.vue";
import cartComponent from "./pages/cartComponent.vue";
import infoComponent from "./pages/infoComponent.vue";

const router = new VueRouter({
    routes: [
        {path: '/', component: homeComponent},
        {path:'/search',component:searchComponent},
        {path:'/cart',component:cartComponent},
        {path:'/info',component:infoComponent}
        ]
});

export default router
