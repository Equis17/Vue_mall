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
                <a :href="item.linkUrl" class="slider-link">
                    <img :src=item.picUrl alt="" class="slider-img">
                </a>
            </swiper-slide>
            <div ></div>
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
        data: function () {
            return {
                direction: 'horizontal',
                loop: true,
                interval: 2000,
                pagination: true,
                sliders: [
                    {linkUrl: '', picUrl: 'src/pages/makeup/banner.jpg'},
                    {linkUrl: '', picUrl: 'src/pages/makeup/banner2.jpg'},
                ]
            };
        },
        created() {
            this.getSliders();
        },
        methods: {
            getSliders() {
                // this.$http.get('http://localhost:3000/get')
                Array.prototype.push.apply(this.sliders, [{linkUrl: '', picUrl: 'src/pages/home/19.jpg'}]);
                console.log(this.sliders)
            }
        }

    }
</script>

<style lang="scss" scoped>
    .slider-wrapper {
        height: 183px;
    }

    .slider-link {
        display: block;
    }

    .slider-link,
    .slider-img {
        width: 100%;
        height: 150px;
    }
</style>
