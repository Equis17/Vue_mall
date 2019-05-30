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
        name: "homeBanner",
        components: {
            vBanner: vBanner
        },
        data: () => {
            return {list: []}
        },
        methods: {
            getBanner: function () {
                this.$http.get('http://localhost:3000/getBanner?name=home').then((res) => {
                    this.list = res.body[0]
                })
            },
            getTest: function () {
                this.list ={url: '../../src/pages/home/15452109808538.jpg'}
            }
        },
        created() {
            this.getTest();
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
