<template>
    <div>
        <div v-if="empty" class="cart-body-empty">
           <div>
               <i class="cart-body-empty-icon iconfont icon-gouwuchekong"></i>
               <span class="cart-body-empty-text">购物车空空如也</span>
               <router-link class="cart-body-empty-link" to="/home">去抢购</router-link>
           </div>
        </div>
        <div v-else class="cart-body-full">

        </div>
    </div>
</template>

<script>
    export default {
        name: "body",
        data() {
            return {
                empty: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";
    .cart-body {
        &-empty {
            width: 100%;
            height: 400px;
            text-align: center;
            div{
                padding-top: 100px;
            }
            &-icon{
                color: $link-active;
                font-size: 140px;
            }
            &-text{
                display: block;
                padding: 0 100px;
                line-height: 40px;
                font-size: $icon-font-size-base;
            }

            &-link{
                display: inline-block;
                margin-top: 15px;
                padding: 0 75px;
                border-radius: 5px;
                line-height: 30px;
                border: 1px solid $link-active;
                color: $link-active;
                font-size: $font-size-l;
            }
        }
    }
</style>
