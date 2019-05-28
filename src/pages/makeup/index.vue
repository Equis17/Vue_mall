<template>
    <makeup-slider></makeup-slider>
</template>

<script>
    import makeupSlider from './slider.vue'
    export default {
        name: "index",
        components:{
            makeupSlider

        }
    }
</script>

<style lang="scss" scoped>
    .swiper-container {
        overflow: hidden;
        width: 100%;
        height: 100%;
    };
</style>
