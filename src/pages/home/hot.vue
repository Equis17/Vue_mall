<template>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
        <h1 class="title">今日特卖•10点上新</h1>
        <vBanner class="hot" v-for="(item,i) in list" :key="i">
            <div class="hot-top" slot="top">
                <img v-lazy="item.url" alt="">
            </div>
            <div class="hot-bottom" slot="bottom">
                <span class="hot-bottom-title">{{item.title}}</span>
                <span class="hot-bottom-interval">还剩{{item.interval}}天</span>
                <span class="hot-bottom-discount">{{item.discount}}折起</span>
                <span class="hot-bottom-label">{{item.span}}</span>
            </div>
        </vBanner>
        <h1 class="title" v-show="busy&&times!==4">正在加载请等待</h1>
        <h1 class="title" v-if="done">已加载完毕</h1>
    </div>
</template>

<script>
    import vBanner from '../../base/banner/index.vue'
    import infiniteScroll from 'vue-infinite-scroll'

    export default {
        name: "hot",
        components: {
            vBanner
        },
        data: () => {
            return {
                list: [],
                busy: false,
                done: false,
                times: 0
            }
        },
        methods: {
            getHot: function () {
                this.$http.get('http://localhost:3000/getHot').then((res) => {
                    Array.prototype.push.apply(this.list, res.body);
                })
            },
            getTest: function () {
                this.list.push({
                    "url": "../src/pages/home/12.jpg",
                    "title": "苹果APPLE专场",
                    "discount": "4.5",
                    "interval": "10",
                    "id": 0,
                    "span": null
                }, {
                    "url": "../src/pages/home/6.jpg",
                    "title": "迪桑娜DISSONA女包专场",
                    "discount": "2.2",
                    "interval": "2",
                    "id": 1,
                    "span": "全场折上7.5折，迪桑娜品牌钜献"
                }, {
                    "url": "../src/pages/home/7.jpg",
                    "title": "伊芙丽eifini女装专场",
                    "discount": "1",
                    "interval": "1",
                    "id": 2,
                    "span": "全场折上8折！"
                }, {
                    "url": "../src/pages/home/8.jpg",
                    "title": "GXG男装专场",
                    "discount": "1.6",
                    "interval": "1",
                    "id": 3,
                    "span": "全场折上8折"
                }, {
                    "url": "../src/pages/home/9.jpg",
                    "title": "New Balance复古运动特卖专场",
                    "discount": "2.6",
                    "interval": "3",
                    "id": 4,
                    "span": "全场折上8折"
                }, {
                    "url": "../src/pages/home/10.jpg",
                    "title": "对白DUIBAI女装-限时直降专场",
                    "discount": "1.2",
                    "interval": "5",
                    "id": 5,
                    "span": "全场折上7.5折！"
                }, {
                    "url": "../src/pages/home/11.jpg",
                    "title": "衣品天成男女童爆款专场",
                    "discount": "1.8",
                    "interval": "12",
                    "id": 6,
                    "span": "全场折上6.8折！"
                }, {
                    "url": "../src/pages/home/13.jpg",
                    "title": "谜尚Missha化妆品专场",
                    "discount": "2.5",
                    "interval": "11",
                    "id": 7,
                    "span": "全场折上9.5折,购物满79/109/149元即送相应礼品，数量有限，送完即止"
                });
            }
            ,
            loadMore: function () {
                this.busy = true;
                this.times++;
                if (this.times > 3) {
                    this.done = true;
                    return false;
                } else {
                    setTimeout(() => {
                        this.getTest();
                        this.busy = false;
                    }, 2000);
                }

            }
        }
        ,
        created() {
            this.getTest();
        }
        ,
        directives: {
            infiniteScroll
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .title {
        font-size: $icon-font-size-base;
        color: #000;
        line-height: 50px;
        text-align: center;
    }

    .hot {
        background-color: $bgc-theme;
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }

        &-top {
            margin: 0 auto;
            border-radius: 20px 20px 0 0;
            border-top: 1px solid $border-color;
            overflow: hidden;
            width: 90%;

            img {
                width: 100%;
                height: auto;
            }
        }

        &-bottom {
            box-sizing: border-box;
            border-radius: 0 0 20px 20px;
            padding: 15px 15px 0 15px;
            border: 1px solid $border-color;
            border-top: 0;
            width: 90%;
            background-color: #fff;

            &-title {
                display: inline-block;
                width: 83%;
                font-size: $icon-font-size-base;
                @include ellipsis
            }

            &-interval {
                display: inline-block;
                vertical-align: top;
                font-size: $font-size-base;
            }

            &-discount {
                display: inline-block;
                line-height: 30px;
                font-size: $font-size-l;
                color: $link-active;

                &:after {
                    content: '|';
                    padding-left: 20px;
                }
            }

            &-label {
                display: inline-block;
                line-height: 30px;
                font-size: $font-size-l;
            }
        }
    }
</style>
