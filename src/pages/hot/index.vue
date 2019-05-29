<template>
    <div>
        <cTop class="top"></cTop>
        <hotBanner class="banner"></hotBanner>
        <hotSection class="section"></hotSection>
        <hotRecommend class="recommend"></hotRecommend>
    </div>

</template>

<script>
    import cTop from '../../components/top.vue'
    import hotBanner from './banner.vue'
    import hotSection from './secton.vue'
    import hotRecommend from './recommend.vue'

    export default {
        name: "index",
        components: {
            cTop,
            hotBanner,
            hotSection,
            hotRecommend
        },
        data: () => {
            return {}
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
