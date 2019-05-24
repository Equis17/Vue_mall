<template>
    <div class="app-container">
        <mt-header fixed title="饿了么"></mt-header>
        12321
        <router-view class=""></router-view>
        <div>
            <nav class="mui-bar mui-bar-tab">
                <router-link class="mui-tab-item" to="#tabbar">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
                <router-link class="mui-tab-item" to="#tabbar-with-chat">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
                    <span class="mui-tab-label">消息</span>
                </router-link>
                <router-link class="mui-tab-item mui-active" to="#tabbar-with-contact">
                    <span class="mui-icon mui-icon-contact"></span>
                    <span class="mui-tab-label">通讯录</span>
                </router-link>
                <router-link class="mui-tab-item" to="#tabbar-with-map">
                    <span class="mui-icon mui-icon-gear"></span>
                    <span class="mui-tab-label">设置</span>
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
</style>
