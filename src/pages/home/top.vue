<template>
    <div>
        <vNavBar class="bar">
            <router-link to="home/login" slot="left" class="bar-left">登录</router-link>
            <div class="bar-center" slot="center">
                <input class="bar-center-input" type="text" placeholder="大家正在搜素:连衣群">
            </div>
            <i class="bar-right iconfont icon-icon_work" slot="right"></i>
        </vNavBar>
        <vNavBar class="mid-bar">
            <ul class="mid-bar-center" slot="center">
                <li v-for="(item,index) in midList"
                    :key=index>
                    <router-link
                            :to=item
                            :class="{'mid-bar-center-li-active':item.isActive}">
                        {{item.title}}
                    </router-link>
                </li>
            </ul>
            <i class="mid-bar-right iconfont icon-xialajiantou" slot="right"></i>
        </vNavBar>
    </div>
</template>

<script>
    import vNavBar from '../../base/navbar/index.vue'

    export default {
        name: "homeTop",
        data: () => {
            return {
                midList: [
                    {to: 'home/1', title: '今日推荐', isActive: true},
                    {to: 'home/2', title: '最后疯抢', isActive: false},
                    {to: 'home/3', title: '美妆', isActive: false},
                    {to: 'home/4', title: '母婴', isActive: false},
                    {to: 'home/5', title: '国际', isActive: false},
                    {to: 'home/6', title: '家电', isActive: false},

                ]
            }
        },
        components: {
            vNavBar:vNavBar
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .bar {
        height: $navbar-height;

        &-left {
            font-size: $font-size-l;
        }

        &-center {
            height: 30px;
            border: 1px solid $border-color;
            border-radius: 20px;
            background-color: $bgc-theme;

            &-input {
                background-color: $bgc-theme;
                width: 90%;
                height: 100%;
                margin: 0 5%;
                font-size: $font-size-l;
            }
        }

        &-right {
            font-size: $icon-font-size-l;
        }
    }

    .mid-bar {
        height: 38px;
        color: $icon-color;

        &-center {
            height: 100%;
            @include flex-around;

            li {
                font-size: $font-size-l;

                a {
                    vertical-align: top;
                    display: inline-block;
                    line-height: 35px;
                }
            }

            &-li-active {
                color: $link-active;
                border-bottom: 3px solid $link-active;

            }
        }

        &-right {
            font-size: $icon-font-size-l;
        }
    }
</style>
