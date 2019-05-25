<template>
    <div class="app-container">
        <mt-header fixed title="JD.COM">
        </mt-header>
        <transition mode="out-in">
            <router-view ></router-view>
        </transition>
        <div>
            <nav class="mui-bar mui-bar-tab">
                <router-link class="mui-tab-item" to="/">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
                <router-link class="mui-tab-item" to="/search">
                    <span class="mui-icon mui-icon-search"></span>
                    <span class="mui-tab-label">搜索</span>
                </router-link>
                <router-link class="mui-tab-item " to="/cart">
                    <span class="mui-icon mui-icon-download"></span>
                    <span class="mui-tab-label">购物车</span>
                </router-link>
                <router-link class="mui-tab-item" to="/info">
                    <span class="mui-icon mui-icon-contact"></span>
                    <span class="mui-tab-label">个人中心</span>
                </router-link>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app",
        data: function () {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .app-container {
        padding-top: 40px;
    }

    .mint-header {
        background-color: firebrick;

        .mint-header-button {
            a {
                color: #fff;
                background-color: firebrick;
            }
        }
    }

    .mui-bar-tab {
        background-color: firebrick;

        .mui-tab-item {
            color: #fff;
            background-color: firebrick;
        }

        .router-link-exact-active {
            color: firebrick !important;
            background-color: #fff !important;
        }
    }

    .v-enter {
        transform: translateX(100%);
    }

    .v-leave-to {
        transform: translateX(-100%);
    }

    .v-enter-active, .v-leave-active {
        transition: all .1s ease;
    }


</style>
