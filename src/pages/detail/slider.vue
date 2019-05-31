<template>
    <div class="slider-wrapper">
        <vSlider
                :direction="direction"
                :loop="loop"
                :interval="interval"
                :pagination="pagination"
                :data="sliders"
                v-if="sliders.length"
        >
            <swiper-slide v-for="(item, index) in sliders" :key="index">
                <img v-lazy=item.picUrl alt="" class="slider-img">
            </swiper-slide>
            <div></div>
        </vSlider>


    </div>
</template>

<script>
    import vSlider from '../../base/slider/index.vue'
    import {swiperSlide} from 'vue-awesome-swiper';

    export default {
        name: "slider",
        components: {
            vSlider,
            swiperSlide
        },
        data:function () {
            return {
                direction: 'horizontal',
                loop: true,
                interval: 2000,
                pagination: true,
                sliders: [
                    {linkUrl: '', picUrl: '../src/pages/detail/1.jpg'},
                    {linkUrl: '', picUrl: '../src/pages/detail/2.jpg'},
                    {linkUrl: '', picUrl: '../src/pages/detail/3.jpg'},
                    {linkUrl: '', picUrl: '../src/pages/detail/4.jpg'}
                ]
            }
        },created() {
            this.$emit('pushImg',this.sliders[0].picUrl)
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .slider-wrapper {
        height: 410px;
    }

    .slider-link {
        display: block;
    }

    .slider-link,
    .slider-img {
        width: 100%;
        height: auto;
    }
</style>
