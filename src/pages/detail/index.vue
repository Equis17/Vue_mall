<template>
    <div class="detail">
        <detailSlider></detailSlider>
        <detailInfo></detailInfo>
        <button class="detail-back" @click="back"><i class="iconfont icon-xialajiantou"></i></button>
        <detailNavBottom></detailNavBottom>
    </div>

</template>

<script>
    import detailSlider from './slider.vue'
    import detailInfo from './info.vue'
    import detailNavBottom from './navbottom.vue'

    export default {
        name: "index",
        components: {
            detailSlider,
            detailInfo,
            detailNavBottom
        },
        methods: {
            back: function () {
                this.$router.back(-1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .detail {
        z-index: $search-z-index;
        position: absolute;
        width: 100%;

        &-back {
            z-index: $search-z-index+100;

            position: absolute;
            top: 20px;
            left: 20px;

            width: 50px;
            height: 50px;
            border-radius: 50%;

            background-color: rgba(0, 0, 0, .6);
            color: #fff;

            i {
                display: inline-block;
                transform: rotateZ(90deg);
                font-size: $icon-font-size-l;
            }
        }
    }
</style>
