<template>
    <div class="v-navbar">
        <div class="v-navbar-left" v-if="$slots.left">
            <slot name="left"></slot>
        </div>
        <div class="v-navbar-center" v-if="$slots.center">
            <slot name="center"></slot>
        </div>
        <div class="v-navbar-right" v-if="$slots.right">
            <slot name="right"></slot>
        </div>
        <h1 class="v-navbar-text" v-if="text" v-text="text"></h1>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
            text: {
                type: String,
                default: ''
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .v-navbar {
        position: relative;
        @include flex-between();
        background-color: $bgc-color;

        &-left {
            width: 50px;
            text-align: center;
        }

        &-center {
            flex: 1;
        }

        &-right {
            width: 50px;
            text-align: center;
            right: 0;
        }

    }
</style>
