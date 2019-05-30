<template>
    <div class="cart">
        <cartTop></cartTop>
        <cartContent></cartContent>

    </div>
</template>

<script>
    import cartTop from './top.vue'
    import cartContent from './info.vue'

    export default {
        name: "index",
        components:{
            cartTop,
            cartContent
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";
    .cart{
        position: absolute;
        z-index: $search-z-index;

        width: 100%;
        height: 100%;
        background-color: #fff;

    }
</style>
