<template>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
        <h1 class="title">今日特卖•10点上新</h1>
        <vBanner class="hot" v-for="(item,i) in list" :key="i">
            <div class="hot-top" slot="top">
                <img :src="item.url" alt="">
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
                    console.log(this.list)
                })
            },
            getTest: function () {
                this.list.push({
                    url: '/src/pages/home/15452109808538.jpg',
                    discount: 1,
                    interval: 1,
                    title: 'asdsad',
                    span: '123'
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
                    }, 1300);
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
