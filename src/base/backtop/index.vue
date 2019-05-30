<template>
    <div class="v-backtop" v-show="goTopShow" @click="goTop">
        <i class="v-backtop-icon iconfont icon-xialajiantou"></i>
    </div>
</template>

<script>
    export default {
        name: "index",
        data: function () {
            return {
                scrollTop: '',
                goTopShow: false
            }
        },
        methods: {
            handleScroll() {
                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if (this.scrollTop > 1000) {
                    this.goTopShow = true
                }
            },
            goTop() {
                document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop = 0;
            }
        },
        watch: {
            scrollTop(val) {
                this.goTopShow = this.scrollTop > 1000;
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .v-backtop {
        width: 50px;
        height: 50px;
        background-color: rgba(0, 0, 0, .8);
        border-radius: 50%;
        text-align: center;

        &-icon {
            display: inline-block;
            transform: rotateZ(180deg);
            font-size: $icon-font-size-l+5;
            line-height: 50px;
            color: #fff;
        }
    }

</style>
