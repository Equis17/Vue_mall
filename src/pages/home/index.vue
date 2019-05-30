<template>
    <div class="home" >
        <homeBanner class="banner"></homeBanner>
        <homeSection class="sections"></homeSection>
        <homeRecommend class="recommend"></homeRecommend>
        <homeHot class="hot"></homeHot>
        <vBacktop class="backtop"></vBacktop>
        <router-link to="/cart">
            <vCart class="cart"></vCart>
        </router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import homeBanner from './banner.vue'
    import homeSection from './section.vue'
    import homeRecommend from './recommend.vue'
    import homeHot from './hot.vue'
    import vBacktop from '../../base/backtop/index.vue'
    import vCart from '../../base/cart/index.vue'

    export default {
        name: "index",
        components: {
            homeBanner,
            homeSection,
            homeRecommend,
            homeHot,
            vBacktop,
            vCart
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .home{
        overflow: hidden;
        height: 100%;
        width: 100%;
    }
    .top {
        position: fixed;
        width: 100%;
        z-index: $navbar-z-index;
    }

    .banner {
        padding-top: 88px;
    }

    .backtop{
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: $backtop-z-index;
    }

    .cart{
        position: fixed;
        left: 30px;
        bottom: 30px;

    }
</style>
