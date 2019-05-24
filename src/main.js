import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue'
Vue.use(VueRouter);

import router from './router.js'
new Vue({
    el: '#app',
    render:(m)=>{return m(app)},
    router
});
