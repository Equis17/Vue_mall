<template>
    <div>
        <div v-if="this.$store.state.goodsList.length===0" class="cart-body-empty">
            <div>
                <i class="cart-body-empty-icon iconfont icon-gouwuchekong"></i>
                <span class="cart-body-empty-text">购物车空空如也</span>
                <router-link class="cart-body-empty-link" to="/home">去抢购</router-link>
            </div>
        </div>
        <div v-else class="cart-body-full">
            <p class="cart-body-full-title">你正在安全购物环境下,请放心购买</p>
            <div class="cart-body-full-address">
                <span class="cart-body-full-address-title">设置收货地址</span>
                <i class="cart-body-full-address-icon iconfont icon-xialajiantou"></i>
            </div>
            <div class="cart-body-full-header">
                <p class="cart-body-full-header-title">精选特卖</p>
            </div>
            <div class="cart-body-full-body">
                <div class="cart-body-full-body-img">
                    <img src="../../../src/pages/detail/1.jpg" alt="">
                </div>
                <div class="cart-body-full-body-box" v-for="(item,i) in this.$store.state.goodsList" :key="i">
                    <span class="cart-body-full-body-box-title">{{item.title}}</span>
                    <span class="cart-body-full-body-box-price">¥{{item.price}}</span>
                    <span class="cart-body-full-body-box-mark">¥{{item.mark}}</span>
                    <div class="cart-body-full-body-cal">
                        <button class="cart-body-full-body-cal-btns" @click="decrement(item)">-</button>
                        <span>{{item.count}}</span>
                        <button class="cart-body-full-body-cal-btns" @click="increment(item)">+</button>
                        <button class="cart-body-full-body-cal-cancel" @click="deleteGoods(item)">X</button>
                    </div>
                </div>
            </div>
            <div class="cart-body-full-amount">
                <p class="cart-body-full-amount-price">¥{{this.$store.getters.getAmount}}</p>
                <p class="cart-body-full-amount-desc">运费登录后为准</p>
            </div>

            <div class="cart-body-full-pay">
                <div class="cart-body-full-pay-top">
                    <span class="cart-body-full-pay-top-span">还需支付:</span>
                    <span class="cart-body-full-pay-top-link">¥{{this.$store.getters.getAmount}}</span>
                </div>
                <div class="cart-body-full-pay-bottom">
                    <button class="cart-body-full-pay-bottom-left">货到付款</button>
                    <button class="cart-body-full-pay-bottom-right">在线支付</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "info",
        data() {
            return {
                empty: true
            }
        },
        methods: {
            decrement: function (item) {
                if (item.count === 1) {
                    return;
                }
                item.count--;
                console.log(item)
            },
            increment: function (item) {
                item.count++;
            },
            deleteGoods: function (item) {
                this.$store.commit('delete', item);
            }
        }
        ,
        created() {
            console.log(this.$store.state.goodsList)
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

            div {
                padding-top: 100px;
            }

            &-icon {
                color: $link-active;
                font-size: 140px;
            }

            &-text {
                display: block;
                padding: 0 100px;
                line-height: 40px;
                font-size: $icon-font-size-base;
            }

            &-link {
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


        &-full {
            &-title {
                padding: 0 15px;
                line-height: 35px;
                background-color: #e8eaf4;
                font-size: 12px;
                color: #000;
            }

            &-address {
                padding: 0 15px;
                height: 47px;
                background-color: #656c89;

                &-title {
                    line-height: 47px;
                    font-size: 16px;
                    color: #ffffff;
                }

                &-icon {
                    float: right;
                    display: inline-block;
                    line-height: 47px;
                    transform: rotateZ(-90deg);
                    font-size: 30px;
                    color: #ffffff;
                }
            }

            &-header {
                padding-top: 15px;
                background-color: $bgc-theme;

                &-title {
                    padding-left: 15px;
                    font-size: 13px;
                    line-height: 50px;
                    color: #000;
                    background-color: #ffffff;
                }


            }

            &-body {
                display: flex;
                padding: 15px 15px;
                height: 160px;

                &-img {
                    padding: 0 10px 0 0;

                    img {
                        width: 68px;
                        height: auto;
                    }
                }

                &-box {
                    position: relative;
                    flex: 1;
                    overflow: hidden;

                    &-title {
                        display: inline-block;
                        padding-right: 50px;
                        font-size: 14px;
                        color: #000;
                        @include multiline-ellipsis(2)
                    }

                    &-price {
                        float: right;
                        margin-top: -20px;
                        font-size: 13px;
                        color: #000;
                    }

                    &-mark {
                        float: right;
                        font-size: 13px;
                        text-decoration: line-through;
                    }

                }

                &-cal {
                    position: absolute;
                    bottom: 10px;
                    width: 100%;

                    &-btns {
                        width: 30px;
                        height: 20px;
                        border: 1px solid $border-color;
                        font-size: 15px;
                        background-color: #fff;
                    }

                    span {
                        font-size: 15px;
                        padding: 0 10px;

                    }

                    &-cancel {
                        float: right;
                        font-size: 15px;
                        line-height: 20px;
                        background-color: #fff;
                    }
                }
            }

            &-amount {
                padding: 15px 0;
                background-color: $bgc-theme;

                &-price {
                    padding: 0 15px;
                    text-align: right;
                    line-height: 48px;
                    font-size: 16px;
                    background-color: #ffffff;
                    color: #000;
                }

                &-desc {
                    padding: 15px 15px;
                    background-color: #fff;
                }

            }

            &-pay {
                position: absolute;
                bottom: 0;
                height: 90px;
                width: 100%;
                padding: 15px;

                &-top {
                    width: 100%;
                    text-align: center;

                    &-span {
                        font-size: 15px;
                        line-height: 20px;
                        color: #000;
                    }

                    &-link {
                        font-size: 14px;
                        color: $link-active;
                        font-weight: bold;
                    }
                }

                &-bottom {
                    width: 100%;
                    display: flex;

                    &-left {
                        flex: 1;
                        float: left;
                        margin-right: 10px;
                        border: 1px solid $border-color;

                        font-size: 16px;
                        height: 45px;
                        background-color: #ffffff;
                        color: #caccd2;
                    }

                    &-right {
                        flex: 1;
                        float: right;
                        margin-left: 10px;
                        height: 45px;
                        font-size: 16px;

                        color: #ffffff;
                        background-color: $link-active;
                    }
                }
            }
        }
    }
</style>
