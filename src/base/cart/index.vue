<template>
    <div class="v-cart">
            <i class="v-cart-icon iconfont icon-gouwuchekong"></i>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .v-cart {
        width: 50px;
        height: 50px;
        background-color: rgba(0, 0, 0, .8);
        border-radius: 50%;
        text-align: center;
        &-icon {
            display: inline-block;
            font-size: $icon-font-size-l;
            line-height: 50px;
            color: #fff;
        }
    }

</style>
