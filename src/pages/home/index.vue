<template>
    <div>
        <cTop class="top" :isDropDown="dropDownFlag" :isSearching="searching" @showDropDown="showDropDown" @showSearchWrap="showSearchWrap" @hideSearchWrap="hideSearchWrap"></cTop>
        <homeBanner class="banner" v-show="!dropDownFlag"></homeBanner>
        <homeSection class="sections" v-show="!dropDownFlag"></homeSection>
        <homeRecommend class="recommend" v-show="!dropDownFlag"></homeRecommend>
        <homeHot class="hot" v-show="!dropDownFlag" ></homeHot>
    </div>
</template>

<script>
    import cTop from '../../components/top.vue'
    import homeBanner from './banner.vue'
    import homeSection from './section.vue'
    import homeRecommend from './recommend.vue'
    import homeHot from './hot.vue'

    export default {
        name: "index",
        components: {
            cTop,
            homeBanner,
            homeSection,
            homeRecommend,
            homeHot
        },
        data:function () {
            return{
                dropDownFlag:false,
                searching:false
            }
        },
        methods:{
            showDropDown:function () {
                this.dropDownFlag=!this.dropDownFlag;
            },
            showSearchWrap:function () {
                this.searching=true;
            },
            hideSearchWrap:function () {
                this.searching=false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .top {
        position: fixed;
        width: 100%;
        z-index: $navbar-z-index;
    }

    .banner {
        padding-top: 88px;
    }
</style>
