import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);


//导入路由
import router from './router.js'
//导入scss样式文件
import '../src/assets/scss/_index.scss'
//初始化渲染App
import App from './app.vue'

new Vue({
    el: '#app',
    render: (r) => {
        return r(App)
    },
    router
});
