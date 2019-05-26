<template>
    <div>
        <h1 class="title">今日特卖<>10点上新</h1>
        <vBanner class="hot">
            <div class="hot-top" slot="top">
                <img src="/src/pages/home/hot.jpg" alt="">
            </div>
            <div class="hot-bottom" slot="bottom">
                <span class="hot-bottom-title">1232131123211232112321123212321</span>
                <span class="hot-bottom-interval">还剩{{day}}天</span>
                <span class="hot-bottom-discount">{{day}}折起</span>
                <span class="hot-bottom-label">全场折上7.5折!</span>
            </div>
        </vBanner>
        <vBanner class="hot">
            <div class="hot-top" slot="top">
                <img src="/src/pages/home/hot.jpg" alt="">
            </div>
            <div class="hot-bottom" slot="bottom">
                <span class="hot-bottom-title">1232131123211232112321123212321</span>
                <span class="hot-bottom-interval">还剩{{day}}天</span>
                <span class="hot-bottom-discount">{{day}}折起</span>
                <span class="hot-bottom-label">全场折上7.5折!</span>
            </div>
        </vBanner>
        <vBanner class="hot">
            <div class="hot-top" slot="top">
                <img src="/src/pages/home/hot.jpg" alt="">
            </div>
            <div class="hot-bottom" slot="bottom">
                <span class="hot-bottom-title">1232131123211232112321123212321</span>
                <span class="hot-bottom-interval">还剩{{day}}天</span>
                <span class="hot-bottom-discount">{{day}}折起</span>
                <span class="hot-bottom-label">全场折上7.5折!</span>
            </div>
        </vBanner>
        <vBanner class="hot">
            <div class="hot-top" slot="top">
                <img src="/src/pages/home/hot.jpg" alt="">
            </div>
            <div class="hot-bottom" slot="bottom">
                <span class="hot-bottom-title">1232131123211232112321123212321</span>
                <span class="hot-bottom-interval">还剩{{day}}天</span>
                <span class="hot-bottom-discount">{{day}}折起</span>
                <span class="hot-bottom-label">全场折上7.5折!</span>
            </div>
        </vBanner>
        <vBanner class="hot">
            <div class="hot-top" slot="top">
                <img src="/src/pages/home/hot.jpg" alt="">
            </div>
            <div class="hot-bottom" slot="bottom">
                <span class="hot-bottom-title">1232131123211232112321123212321</span>
                <span class="hot-bottom-interval">还剩{{day}}天</span>
                <span class="hot-bottom-discount">{{day}}折起</span>
                <span class="hot-bottom-label">全场折上7.5折!</span>
            </div>
        </vBanner>
        <vBanner class="hot">
            <div class="hot-top" slot="top">
                <img src="/src/pages/home/hot.jpg" alt="">
            </div>
            <div class="hot-bottom" slot="bottom">
                <span class="hot-bottom-title">1232131123211232112321123212321</span>
                <span class="hot-bottom-interval">还剩{{day}}天</span>
                <span class="hot-bottom-discount">{{day}}折起</span>
                <span class="hot-bottom-label">全场折上7.5折!</span>
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
            return {day: 2}
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .title {
        font-size: $icon-font-size-base;
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

            &-title {
                display: inline-block;
                width: 85%;
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
                &:after{
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
