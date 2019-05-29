<template>
    <div class="home">
        <homeBanner class="banner"></homeBanner>
        <homeSection class="sections"></homeSection>
        <homeRecommend class="recommend"></homeRecommend>
        <homeHot class="hot"></homeHot>
        <router-view></router-view>
    </div>
</template>

<script>
    import homeBanner from './banner.vue'
    import homeSection from './section.vue'
    import homeRecommend from './recommend.vue'
    import homeHot from './hot.vue'

    export default {
        name: "index",
        components: {
            homeBanner,
            homeSection,
            homeRecommend,
            homeHot
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
</style>
