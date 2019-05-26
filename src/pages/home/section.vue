<template>
    <div>
        <vNavBar class="section-part">
            <ul slot="center" class="section-part-center">
                <li v-for="(item,i) in list1" :key="i">
                    <div class="section-part-center-background"></div>
                    <img :src="item.url" alt="">
                </li>
            </ul>
        </vNavBar>
        <vNavBar class="section-part">
            <ul slot="center" class="section-part-center">
                <li v-for="(item,i) in list2" :key="i">
                    <div class="section-part-center-background"></div>
                    <img :src="item.url" alt="">
                </li>
            </ul>
        </vNavBar>
    </div>
</template>

<script>
    import vNavBar from '../../base/navbar/index.vue'

    export default {
        name: "homeSection",
        components: {
            vNavBar: vNavBar
        },
        data: () => {
            return {
                list1: [],
                list2: []
            }
        },
        methods: {
            getSection: function () {
                this.$http.get('http://localhost:3000/getSection?name=home').then((res) => {
                    this.list1 = res.body;
                    this.list2 = this.list1.splice(res.body.length / 2, res.body.length);
                })
            }
        },
        created() {
            this.getSection()
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .section {
        &-part-center {
            width: 100%;
            @include flex-around;

            li {
                flex: 1;
                position: relative;
                text-align: center;

                img {
                    position: inherit;
                    left: 0;
                    width: 100%;
                    height: auto;
                }
            }

            &-background {
                position: absolute;
                left: 50%;
                top: 40%;
                transform: translate(-50%, -50%);
                width: 68%;
                height: 61%;
                border-radius: 50%;
                background: -webkit-linear-gradient(top, #e3e5e7, #fff);
                background: -moz-linear-gradient(bottom, #e3e5e7, #fff);
                background: -o-linear-gradient(bottom, #e3e5e7, #fff);
                background: linear-gradient(to bottom, #e3e5e7, #fff);
            }

        }
    }


</style>
