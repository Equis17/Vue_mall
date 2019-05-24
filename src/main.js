import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue'
Vue.use(VueRouter);


new Vue({
    el: '#app',
    render:(m)=>{return m(app)}
});
