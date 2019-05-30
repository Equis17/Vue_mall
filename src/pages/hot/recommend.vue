<template>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
        <h1 class="recommendTitle" slot="top">每日早上10晚上8点更新</h1>
        <vBanner v-for="(item,index) in list" :key="index">
            <div class="recommendTop" slot="top">
                <img :src="item.url" alt="">
            </div>
            <div class="recommendBottom" slot="bottom">
                <img v-for="(url,index) in item.midUrl" :key="index" :src="url" alt="">
            </div>
        </vBanner>
        <h1 class="recommendTitle" v-show="busy">正在加载请等待</h1>
    </div>

</template>

<script>
    import vBanner from '../../base/banner/index.vue'
    import infiniteScroll from 'vue-infinite-scroll'

    export default {
        name: "hotRecommend",
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
        }, methods: {
            getTest: function () {
                this.list.push({
                    url: '../src/pages/hot/banner.jpg',
                    midUrl: ['../src/pages/hot/3-2.jpg',
                        '../src/pages/hot/3-3.jpg',
                        '../src/pages/hot/3-4.jpg'],
                    discount: 1,
                    interval: 1,
                    title: 'asdsad',
                    span: '123'
                });
            },
            loadMore() {
                this.busy = true;
                setTimeout(() => {
                    this.getTest();
                    this.busy = false;
                }, 1000)
            }
        }, created() {
            this.getTest();
        }, directives: {
            infiniteScroll
        }

    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .recommend {
        padding: 0 5%;
        background-color: $bgc-theme;

        &Title {
            line-height: 50px;
            height: 50px;
            text-align: center;
            font-size: $icon-font-size-base;
            background-color: $bgc-theme;
        }

        &Top {
            img {
                width: 100%;
                height: auto;
                border-radius: 15px 15px 0 0;
            }
        }

        &Bottom {
            padding: 10px 0;
            @include flex-around;

            img {
                width: 30%;
                height: auto;
            }
        }
    }
</style>
