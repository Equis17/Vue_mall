<template>
    <div>
        <vBanner class="banner">
            <div class="banner-top" slot="top">
                <img :src=list.url alt="">
            </div>
        </vBanner>
    </div>
</template>

<script>
    import vBanner from '../../base/banner/index.vue';

    export default {
        name: "hotBanner",
        components: {
            vBanner: vBanner
        },
        data: () => {
            return {list: []}
        },
        methods:{
            getBanner:function () {
                    this.list={url:'../src/pages/hot/banner.jpg'}
            }
        },
        created() {
            this.getBanner();
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .banner {
        &-top {
            img {
                width: 100%;
                height: auto;
            }
        }
    }
</style>
