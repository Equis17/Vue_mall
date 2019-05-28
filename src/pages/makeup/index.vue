<template>
    <div>
        <cTop class="top"></cTop>
        <makeup-slider class="swiper"></makeup-slider>
    </div>
</template>

<script>
    import cTop from '../../components/top.vue'
    import makeupSlider from './slider.vue'

    export default {
        name: "index",
        components:{
            cTop,
            makeupSlider
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";
    .top {
        position: fixed;
        width: 100%;
    }
    .swiper {
        padding-top: 88px;
        overflow: hidden;
        width: 100%;
        height: 100%;
    };
</style>
