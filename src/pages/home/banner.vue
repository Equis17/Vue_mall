<template>
    <div>
        <vBanner class="banner">
            <div class="banner-top" slot="top">
                <img src="/src/pages/home/download.jpg" alt="">
            </div>
        </vBanner>
    </div>
</template>

<script>
    import vBanner from '../../base/banner/index.vue';
    export default {
        name: "homeBanner",
        components:{
            vBanner:vBanner
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";
    .banner{
        &-top{
            img{
                width: 100%;
                height: auto;
            }
        }
    }
</style>
