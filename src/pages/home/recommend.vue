<template>
    <div>
        <vBanner class="banner">
            <div class="banner-top" slot="top">
                <img src="/src/pages/home/recommend-head.jpg" alt="">
            </div>
            <ul class="banner-bottom" slot="bottom">
                <li class="banner-bottom-item"><img class="banner-bottom-item-pic" src="/src/pages/home/recommend.jpg"
                                                    alt=""></li>
                <li class="banner-bottom-item"><img class="banner-bottom-item-pic" src="/src/pages/home/recommend.jpg"
                                                    alt=""></li>
                <li class="banner-bottom-item"><img class="banner-bottom-item-pic" src="/src/pages/home/recommend.jpg"
                                                    alt=""></li>
            </ul>
        </vBanner>
        <vBanner class="banner">
            <div class="banner-top" slot="top">
                <img src="/src/pages/home/recommend-head.jpg" alt="">
            </div>
            <ul class="banner-bottom" slot="bottom">
                <li class="banner-bottom-item">
                    <img class="banner-bottom-item-pic" src="/src/pages/home/recommend.jpg" alt="">
                    <img class="banner-bottom-item-brand" src="/src/pages/home/span.png" alt="">
                    <span class="banner-bottom-item-span">98</span>
                </li>
                <li class="banner-bottom-item">
                    <img class="banner-bottom-item-pic" src="/src/pages/home/recommend.jpg" alt="">
                    <img class="banner-bottom-item-brand" src="/src/pages/home/span.png" alt="">
                    <span class="banner-bottom-item-span">98</span>
                </li>
                <li class="banner-bottom-item">
                    <img class="banner-bottom-item-pic" src="/src/pages/home/recommend.jpg" alt="">
                    <img class="banner-bottom-item-brand" src="/src/pages/home/span.png" alt="">
                    <span class="banner-bottom-item-span">98</span>
                </li>
                <li class="banner-bottom-item">
                    <img class="banner-bottom-item-pic" src="/src/pages/home/recommend.jpg" alt="">
                    <img class="banner-bottom-item-brand" src="/src/pages/home/span.png" alt="">
                    <span class="banner-bottom-item-span">98</span>
                </li>
            </ul>
        </vBanner>
        <vBanner class="banner">
            <div class="banner-top" slot="top">
                <img src="/src/pages/home/recommend-head.jpg" alt="">
            </div>
            <ul class="banner-bottom" slot="bottom">
                <li class="banner-bottom-item"><img class="banner-bottom-item-pic" src="/src/pages/home/recommend.jpg"
                                                    alt=""></li>
                <li class="banner-bottom-item"><img class="banner-bottom-item-pic" src="/src/pages/home/recommend.jpg"
                                                    alt=""></li>
                <li class="banner-bottom-item"><img class="banner-bottom-item-pic" src="/src/pages/home/recommend.jpg"
                                                    alt=""></li>
            </ul>
        </vBanner>

    </div>
</template>

<script>
    import vBanner from '../../base/banner/index.vue'

    export default {
        name: "homeRecommend",
        components: {
            vBanner
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .banner {
        &-top {
            img {
                width: 100%;
                height: auto;
            }
        }

        &-bottom {
            display: flex;

            &-item {
                flex: 1;
                text-align: center;

                &-pic {
                    width: 100%;
                    height: auto;
                }

                &-brand {
                    display: block;
                    align-items: center;
                    width: 50%;
                    margin: 0 auto;
                    height: auto;
                }

                &-span {
                    color: $link-active;
                }
            }

        }
    }

</style>
