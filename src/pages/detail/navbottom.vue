<template>
    <div class="nav-bottom">
        <router-link class="nav-bottom-cart" to="/cart"><i class="nav-bottom-cart-icon iconfont icon-gouwuchekong"></i>
        </router-link>
        <button class="nav-bottom-btn" @click="addCart">加入购物车</button>

    </div>
</template>

<script>
    export default {
        name: "navbottom",
        methods:{
            addCart:function () {
                this.$emit('addCart');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .nav-bottom {
        position: fixed;
        bottom: 0;

        padding: 15px;
        width: 100%;
        display: flex;

        background-color: #fff;

        &-cart {
            margin-right: 10px;

            display: block;
            flex: 3;
            border: 1px solid $border-color;
            height: 45px;
            text-align: center;
            line-height: 45px;

            &-icon {
                font-size: $icon-font-size-l;
                color: #000000;
            }
        }

        &-btn {
            display: block;
            flex: 9;

            font-size: $icon-font-size-base;
            color: #ffffff;
            background-color: $link-active;
        }

        &-animate-box{
            position: absolute;
            left: 50%;
            top:50%;
            transform: translate(-50%,-50%);
            width: 50px;
            height: 50px;
            overflow: hidden;
        }
    }
</style>
