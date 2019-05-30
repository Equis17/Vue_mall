import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        goodsList: [],
        historyList:[]
    },
    mutations: {
        addCart: function (state, info) {
            if (state.goodsList.length === 0) {
                return state.goodsList.push(info);
            }
            let flag = true;
            for (const item of state.goodsList) {
                if (item.id === info.id) {
                    item.count++;
                    flag = false;
                }
            }
            if (flag) {
                state.goodsList.push(info);
            }
            console.log(state.goodsList)
        },
        delete:function (state,item) {
            state.goodsList.splice(state.goodsList.indexOf(item),1);
        },
        addHistory:function (state,val) {
            if (state.historyList.length === 0) {
                return state.historyList.push(val);
            }
            let flag = true;
            for (const item of state.historyList) {
                if (item.searchWords === val.searchWords) {
                   return;
                }
            }
            if (flag) {
                state.historyList.push(val);
            }
            console.log(state.historyList)

        },
        deleteHistory:function (state) {
            state.historyList=[];
        }
    },
    getters:{
        getAmount:function (state) {
            let sum=0;
            for(const item of state.goodsList){
                sum+=item.price*item.count;
            }
            return sum;
        }
    }
});
//导入路由
import router from './router.js'
//导入scss样式文件
import '../src/assets/scss/_index.scss'
import 'swiper/dist/css/swiper.css';
//初始化渲染App
import App from './app.vue'

new Vue({
    el: '#app',
    render: (r) => {
        return r(App)
    },
    router,
    store
});
