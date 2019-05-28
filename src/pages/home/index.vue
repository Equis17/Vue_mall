<template>
    <div>
        <cTop class="top"></cTop>
        <homeBanner class="banner"></homeBanner>
        <homeSection class="sections"></homeSection>
        <homeRecommend class="recommend"></homeRecommend>
        <homeHot class="hot"></homeHot>
    </div>
</template>

<script>
    import cTop from '../../components/top.vue'
    import homeBanner from './banner.vue'
    import homeSection from './section.vue'
    import homeRecommend from './recommend.vue'
    import homeHot from './hot.vue'

    export default {
        name: "index",
        components: {
            cTop,
            homeBanner,
            homeSection,
            homeRecommend,
            homeHot
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .top {
        position: fixed;
        width: 100%;
    }

    .banner {
        padding-top: 88px;
    }
</style>
