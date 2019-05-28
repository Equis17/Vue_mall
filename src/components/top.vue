<template>
    <div>
        <vNavBar class="bar">
            <i v-if="isSearching" class="bar-left-icon iconfont icon-xialajiantou" slot="left" ></i>
            <router-link v-else to="home/login" slot="left" class="bar-left">登录</router-link>
            <div class="bar-center" slot="center">
                <input class="bar-center-input" type="text" placeholder="大家正在搜素:连衣群" @focus="showSearchWrap">
            </div>
            <i class="bar-right iconfont icon-icon_work" slot="right"><a href="#"></a></i>
        </vNavBar>
        <div class="bar-wrap" v-show="isSearching" >
            <router-link  to="home/login" slot="left" class="bar-left">登录</router-link>

        </div>

        <vNavBar class="mid-bar">
            <ul class="mid-bar-center" slot="center">
                <li v-for="(item,index) in midList"
                    :key=index>
                    <router-link
                            :to=item.to
                            :class="{'mid-bar-center-li-active':item.isActive}">
                        {{item.title}}
                    </router-link>
                </li>
            </ul>
            <i class="mid-bar-right iconfont icon-xialajiantou" slot="right" ref="dropDownArrow"
               @click="showDropDown"></i>
        </vNavBar>
        <div class="mid-bar-wrap" v-show="isDropDown">
            <span class="mid-bar-wrap-title">热门推荐</span>
            <ul class="mid-bar-wrap-recommend">
                <li v-for="(item,i) in wrapList" :key="i"><a href="#"><i :class="item.className"></i><span>{{item.title}}</span></a>
                </li>
                <div style="clear: both;"></div>
            </ul>
            <span class="mid-bar-wrap-title">更多推荐</span>
            <ul class="mid-bar-wrap-more">
                <li><a href="#">女装</a></li>
                <li><a href="#">男装</a></li>
                <li><a href="#">鞋包</a></li>
                <li><a href="#">童装童鞋</a></li>
                <li><a href="#">面部护肤</a></li>
                <li><a href="#">手表配饰</a></li>
                <li><a href="#">内衣</a></li>
                <li><a href="#">运动户外</a></li>
                <li><a href="#">护肤彩妆</a></li>
                <li><a href="#">手机数码</a></li>
                <li><a href="#">轻奢</a></li>
                <li><a href="#">旗舰店</a></li>
                <li><a href="#">国际</a></li>
                <li><a href="#">母婴</a></li>
                <li><a href="#">家居家纺</a></li>
                <li><a href="#">大家电</a></li>
                <li><a href="#">家居家装</a></li>
                <li><a href="#">生活超市</a></li>
                <li><a href="#">医药健康</a></li>

            </ul>
        </div>
    </div>
</template>

<script>
    import vNavBar from '../base/navbar/index.vue'

    export default {
        name: "homeTop",
        data: () => {
            return {
                midList: [
                    {to: '/home', title: '今日推荐', isActive: true},
                    {to: '/hot', title: '最后疯抢', isActive: false},
                    {to: '/makeup', title: '美妆', isActive: false},
                    {to: '/maternalProducts', title: '母婴', isActive: false},
                    {to: '/international', title: '国际', isActive: false},
                    {to: '/household', title: '家电', isActive: false},
                ],
                wrapList: [
                    {className: 'iconfont icon-shopping-bag', title: '今日推荐'},
                    {className: 'iconfont icon-coupon-dash', title: '最后疯抢'},
                    {className: 'iconfont icon-meizhuang', title: '美妆'},
                    {className: 'iconfont icon-muying', title: '母婴'},
                    {className: 'iconfont icon-guoji', title: '国际'},
                    {className: 'iconfont icon-icon--', title: '家电'},
                    {className: 'iconfont icon-chuang', title: '家居'},
                    {className: 'iconfont icon-kafei', title: '生活'},
                    {className: 'iconfont icon-zuanshi', title: '唯品'}
                ]
            }
        },
        props: ['isDropDown', 'isSearching']
        ,
        components: {
            vNavBar: vNavBar
        },
        methods: {
            showDropDown: function () {
                this.isDropDown ? this.$refs.dropDownArrow.style.transform = 'rotateZ(180deg)' : this.$refs.dropDownArrow.style.transform = 'rotateZ(0)';
                this.$emit('showDropDown');
            },
            showSearchWrap: function () {
                this.$emit('showSearchWrap');
            }
        }
    }
</script>


<style lang="scss" scoped>
    @import "../assets/scss/mixins";

    .bar {
        height: $navbar-height;

        &-left {
            font-size: $font-size-l;
            transform: rotateY(90deg);
            &-icon{
                display: inline-block;

            }
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

        &-wrap {
            width: 100%;
            height: 1500px;
            background-color: #fff;
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


        }

        &-right {
            display: inline-block;
            transition: .5s all;
            font-size: $icon-font-size-l;
        }

        .router-link-active {
            color: $link-active;
            border-bottom: 3px solid $link-active;

        }

        &-wrap {
            width: 100%;
            height: 1600px;
            background-color: #fff;

            &-title {
                font-size: $font-size-base;
                line-height: 25px;
                padding-left: 15px;
            }

            &-recommend {
                width: 100%;
                text-align: center;

                li {
                    float: left;
                    width: 25%;
                    padding: 10px;
                    border-right: 1px solid $border-color;
                    border-bottom: 1px solid $border-color;

                    &:nth-child(4n) {
                        border-right: 0;
                    }

                    i {
                        font-size: $icon-font-size-base+5px;
                    }

                    span {
                        display: block;
                        line-height: 30px;
                        font-size: 12px;
                    }
                }
            }

            &-more {
                text-align: center;
                width: 95%;
                margin: 0 auto;

                li {
                    float: left;
                    margin-right: 5px;
                    margin-bottom: 15px;

                    width: 23%;
                    border-radius: 15px;
                    line-height: 25px;
                    background-color: $bgc-theme;

                    &:nth-child(4n) {
                        margin-right: 0;
                    }
                }
            }
        }
    }

</style>
