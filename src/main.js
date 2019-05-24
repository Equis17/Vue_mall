import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue'
import mintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
Vue.use(VueRouter);
Vue.use(mintUI);
import router from './router.js'
new Vue({
    el: '#app',
    render:(m)=>{return m(app)},
    router
});
