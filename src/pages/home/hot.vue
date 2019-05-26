<template>
    <div>
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
    </div>
</template>

<script>
    import vBanner from '../../base/banner/index.vue'

    export default {
        name: "hot",
        components: {
            vBanner
        },
        data: () => {
            return {list: []}
        },
        methods: {
            getHot: function () {
                this.$http.get('http://localhost:3000/getHot').then((res)=>{this.list=res.body})
            }
        },
        created() {
            this.getHot();
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
            height: 70px;
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
