<template>
    <div @touchmove.prevent>

        <vNavBar class="bar">
            <i v-if="isSearching" class="bar-left-icon iconfont icon-xialajiantou" slot="left"
               @click="hideSearchWrap"></i>
            <router-link v-else :to="{name:'home-login'}" slot="left" class="bar-left">登录</router-link>
            <div class="bar-center" slot="center">
                <input class="bar-center-input" type="text" placeholder="大家正在搜素:连衣群" @click="showSearchWrap"
                       v-model="searchWords">
            </div>
            <router-link v-if="isSearching" class="bar-right-search" :to="'/search/'+searchWords" slot="right"
                         @click.native="hideSearchWrap">搜索
            </router-link>
            <i v-else class="bar-right iconfont icon-icon_work" slot="right"><a href="#"></a></i>
        </vNavBar>
        <div class="bar-wrap" v-show="isSearching" @click.prevent>
            <div class="bar-wrap-history">
                <div class="bar-wrap-history-title">
                    <span>最近搜索</span>
                    <a href="#" @click.default>清空</a>
                    <div style="clear: both"></div>
                </div>
                <ul>
                    <li class="bar-wrap-history-item"><a href="#">连衣群</a></li>
                    <li class="bar-wrap-history-item"><a href="#">连衣群</a></li>
                    <li class="bar-wrap-history-item"><a href="#">连衣群</a></li>
                    <li class="bar-wrap-history-item"><a href="#">连衣群</a></li>
                    <li class="bar-wrap-history-item"><a href="#">连衣群</a></li>
                    <li class="bar-wrap-history-item"><a href="#">连衣群</a></li>
                    <div style="clear: both;"></div>
                </ul>
            </div>
            <div class="bar-wrap-hot">
                <div class="bar-wrap-hot-title">
                    <span>热门搜索</span>
                    <div style="clear: both"></div>
                </div>
                <ul>
                    <li class="bar-wrap-hot-item" v-for="(name,i) in searchHotList" :key="i"><a href="#">{{name}}</a>
                    </li>
                    <div style="clear: both;"></div>
                </ul>
            </div>
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
                ],
                searchHistoryList: [],
                searchHotList: ['口碑爆款', '面膜', '韩衣都舍t恤女', '防晒', '护肤套装', '连衣裙', '女士t恤', '女凉鞋', '女式衬衫', '女式套装', '蜜丝佛陀 MAX FACTOR', '华为/HUAWEI', '联想/LENOVO', 'XQ', '小猪佩奇/PEPPA PIG'],
                searchWords: '连衣裙'
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
            },
            hideSearchWrap: function () {
                this.$emit('hideSearchWrap');
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

            &-icon {
                font-size: $icon-font-size-l;
                display: inline-block;
                transform: rotateZ(90deg);

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

            &-search {
                font-size: $font-size-l+2;
            }
        }

        &-wrap {
            width: 100%;
            height: 1500px;
            background-color: #fff;

            &-history, &-hot {
                padding: 15px 15px 15px 15px;
                border-bottom: 1px solid $border-color;

                &-title {
                    span {
                        float: left;
                        line-height: 20px;
                        font-size: $font-size-l;
                    }

                    a {
                        float: right;
                        line-height: 20px;
                        font-size: $font-size-l;
                    }
                }


                &-item {
                    float: left;
                    margin: 10px 0;

                    a {
                        display: inline-block;

                        padding: 0 15px;
                        margin-right: 15px;

                        line-height: 30px;
                        font-size: $font-size-l;
                        color: #5D78AB;

                        border: 1px solid $border-color;
                        border-radius: 5px;
                    }
                }
            }
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
