<template>
    <div class="section">
        <h1 class="sectionTop" slot="top">撩动夏日 焕新出游</h1>
        <vBanner>
            <div class="sectionBottom" slot="bottom">
                <img src="./14-2.jpg" alt="">
                <img src="./14-2.jpg" alt="">
                <img src="./14-2.jpg" alt="">
                <img src="./14-2.jpg" alt="">

            </div>
        </vBanner>
        <vBanner>
            <div class="sectionBottom" slot="bottom">
                <img src="./14-2.jpg" alt="">
                <img src="./14-2.jpg" alt="">
                <img src="./14-2.jpg" alt="">
                <img src="./14-2.jpg" alt="">

            </div>
        </vBanner>
        <vBanner>
            <div class="sectionBottom" slot="bottom">
                <img src="./14-2.jpg" alt="">
                <img src="./14-2.jpg" alt="">
                <img src="./14-2.jpg" alt="">
                <img src="./14-2.jpg" alt="">

            </div>
        </vBanner>
    </div>
</template>

<script>

    import vBanner from '../../base/banner/index.vue'

    export default {
        name: "hotSection",
        components: {
            vBanner
        }

    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .section {
        &Top {
            text-align: center;
            height: 50px;
            line-height: 50px;
            font-size: $icon-font-size-base;
            @include ellipsis;
            background-color: $bgc-theme;
        }

        &Bottom {
            @include flex-center();
            background-color: $bgc-theme;
            padding: 0 5%;

            img {
                width: 25%;
                height: auto;
            }
        }

    }
</style>
