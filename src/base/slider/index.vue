<template>
    <swiper :options="swiperOption" :key="KeyId" class="slider">
        <slot></slot>
        <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
    </swiper>
</template>


<script>
    import {swiper} from 'vue-awesome-swiper'

    export default {
        name: "index",
        components: {
            swiper
        },
        data: () => {
            return {
                KeyId: Math.random()
            }
        },
        props: {
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return [
                        'horizontal',
                        'vertical'
                    ].indexOf(value) > -1;
                }
            },
            interval: {
                type: Number,
                default: 3000,
                validator(val) {
                    return val >= 0;
                }
            },
            loop: {
                type: Boolean,
                default: true
            },
            pagination: {
                type: Boolean,
                default: true
            },
            data: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        watch: {
            data(newData) {
                if (newData.length === 0) {
                    return [];
                }
                this.swiperOption.loop = !(this.data.length <= 1);
                this.KeyId = Math.random();
            }
        },
        created() {
            this.init();
        },
        methods: {
            init() {
                this.swiperOption = {
                    watchOverFlow: true,
                    direction: this.direction,
                    autoplay: this.interval ? {
                        delay: this.interval,
                        disableOnInteraction: false
                    } : false,
                    sliderPerView: 1,
                    loop: !(this.data.length <= 1),
                    pagination: {
                        el: this.pagination ? '.swiper-pagination' : null
                    }
                };
            }
        }
    }
</script>
<style scoped>
    .swiper-container{
        width: 100%;
        height: 100%;
    }
    .slider{
        background-color: #fff;
    }
</style>
