<template>
    <div>
        <homeTop class="top"></homeTop>
        <homeBanner class="banner"></homeBanner>
        <homeSection class="sections"></homeSection>
        <homeRecommend class="recommend"></homeRecommend>
        <homeHot class="hot"></homeHot>
    </div>
</template>

<script>
    import homeTop from './top.vue'
    import homeBanner from './banner.vue'
    import homeSection from './section.vue'
    import homeRecommend from './recommend.vue'
    import homeHot from './hot.vue'

    export default {
        name: "index",
        components: {
            homeTop,
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
