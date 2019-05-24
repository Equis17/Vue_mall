<template>
    <div class="app-container">
        <mt-header fixed title="JD.COM">
        </mt-header>
        <router-view class=""></router-view>
        <div>
            <nav class="mui-bar mui-bar-tab">
                <router-link class="mui-tab-item mui-active" to="#tabbar">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
                <router-link class="mui-tab-item" to="#tabbar-with-chat">
                    <span class="mui-icon mui-icon-search"></span>
                    <span class="mui-tab-label">搜索</span>
                </router-link>
                <router-link class="mui-tab-item " to="#tabbar-with-contact">
                    <span class="mui-icon mui-icon-download"></span>
                    <span class="mui-tab-label">购物车</span>
                </router-link>
                <router-link class="mui-tab-item" to="#tabbar-with-map">
                    <span class="mui-icon mui-icon-contact"></span>
                    <span class="mui-tab-label">个人中心</span>
                </router-link>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app"
    }
</script>

<style lang="scss" scoped>
    .app-container {
        padding-top: 40px;
    }
    .mint-header,.mui-bar-tab{
        background-color: firebrick;
    }
    .mui-bar-tab>.mui-tab-item{
        color: #fff;
        &.mui-active{
            color: firebrick;
            background-color: #fff;
        }
    }

</style>
