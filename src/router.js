import VueRouter from 'vue-router'
import homeComponent from "./components/tabbar/homeComponent.vue";

const router = new VueRouter({
    routes: [
        {path: '/', component: homeComponent}
        ]
});

export default router
