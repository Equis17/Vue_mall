<template>
    <div id="app" >
        <cTop class="top" :isDropDown="dropDownFlag" :isSearching="searching" @showDropDown="showDropDown"
              @showSearchWrap="showSearchWrap" @hideSearchWrap="hideSearchWrap" ></cTop>
            <router-view></router-view>
    </div>
</template>

<script>
    import cTop from './components/top.vue'

    export default {
        name: "app",
        components: {
            cTop
        },
        data: function () {
            return {
                dropDownFlag: false,
                searching: false
            }
        },
        methods: {
            showDropDown: function () {
                this.dropDownFlag = !this.dropDownFlag;
            },
            showSearchWrap: function () {
                this.searching = true;
            },
            hideSearchWrap: function () {
                this.searching = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "assets/scss/mixins";

    .top {
        position: fixed;
        width: 100%;
        z-index: $navbar-z-index;
    }
</style>
