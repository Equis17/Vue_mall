<template>
    <div class="login" @touchmove.prevent>
        <div class="logo-box">
            <img src="logo.png" alt="">
            <router-link to="/home">X</router-link>
        </div>
        <form class="form">
            <div class="form-number">
                <span class="form-number-title">手机号</span>
                <input class="form-number-input" type="text" placeholder="请输入手机号码">
            </div>
            <div class="form-password">
                <span class="form-password-title">验证码</span>
                <input class="form-password-input" type="text" placeholder="请输入手机号码">
                <a class="form-password-validate" href="#" @click.prevent>获取验证码</a>
            </div>
            <div class="form-submit">
                <input class="form-submit-input" type="button" :disabled="true" value="手机号注册登录">
                <div class="form-submit-detail">
                    <div class="form-submit-detail-checkbox"></div>
                    同意<a class="form-submit-detail-item">《唯品会服务条款》</a>、
                    <a class="form-submit-detail-item">《隐私条款》</a>、
                    <a class="form-submit-detail-item">《唯品会支付用户服务协议》</a>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "homeLogin",
        methods:{
            c:function () {
                console.log(this)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .logo-box {
        width: 100%;
        height: 200px;
        background-color: $bgc-theme;
        position: relative;

        img {
            width: 30%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: auto;
        }

        a {
            font-size: $icon-font-size-l;
            position: absolute;
            top: 5%;
            right: 5%;
        }
    }

    .form {
        &-number {
            display: flex;
            border-bottom: 1px solid $border-color;
            text-align: center;

            &-title {
                line-height: 50px;
                font-size: $font-size-l+2;
                flex: 3;
            }

            &-input {
                line-height: 50px;
                font-size: $font-size-l;
                flex: 9;

                &::placeholder {
                    color: #aaa;
                }
            }
        }

        &-password {
            display: flex;
            border-bottom: 1px solid $border-color;
            text-align: center;

            &-title {
                line-height: 50px;
                font-size: $font-size-l+2;
                flex: 3;
            }

            &-input {
                line-height: 50px;
                font-size: $font-size-l;
                outline: none;
                flex: 5;
            }

            &-validate {
                flex: 4;
                line-height: 50px;
                font-size: $font-size-l+2;
                border-left: 1px solid $border-color;
                color: #AAA;
            }
        }

        &-submit {
            width: 90%;
            padding-top: 30px;
            margin: 0 auto;

            &-input {
                width: 100%;
                border-radius: 5px;
                background-color: #DE3D96;
                color: #ee9eca;
                line-height: 50px;
                font-size: $font-size-l+2;
            }

            &-detail {
                margin-top: 20px;

                &-checkbox {
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    border: 1px solid #22C24D;
                }

                &-item {
                    line-height: 20px;
                    font-size: $font-size-base;
                    color: #157EFA;
                }
            }
        }
    }

    .login{
        overflow: hidden;
        position:fixed;
        top: 0;
        left: 0;
        z-index: $backtop-z-index;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
    }
</style>
