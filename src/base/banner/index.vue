<template>
    <div class="v-banner">
        <div class="v-banner-top" v-if="$slots.top">
            <slot name="top"></slot>
        </div>
        <div class="v-banner-bottom" v-if="$slots.bottom">
            <slot name="bottom"></slot>
        </div>
        <div class="v-banner-slider" v-if="$slots.slider">
            <slot name="slider"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";
    .v-banner-bottom {
        @include flex-between
    }
</style>
