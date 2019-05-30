<template>
    <vTop class="cart-top">
        <div class="cart-top-left" slot="left" @click="back"><i class="cart-top-left-icon iconfont icon-xialajiantou"></i></div>
        <div class="cart-top-center" slot="center"><span>购物车</span></div>
        <div slot="right"></div>
    </vTop>

</template>

<script>
    import vTop from '../../base/navbar/index.vue'
    export default {
        name: "top",
        components:{
            vTop
        },
        methods:{
            back: function () {
                this.$router.back(-1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";
    .cart-top{
        height: 50px;
        &-left{
            display: inline-block;
            transform: rotateZ(90deg);
            &-icon{
                font-size: $icon-font-size-l+5;
                color: #000;
            }
        }
        &-center{
            text-align: center;

            span{
                font-size: $icon-font-size-l;
                color: #000;
            }
        }
    }
</style>
