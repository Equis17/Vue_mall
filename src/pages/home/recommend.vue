<template>
    <div>
        <vBanner class="banner" v-for="(listItem,i) in list" :key="i">

            <div class="banner-top" slot="top">
                <img :src=listItem[0].url alt="">
            </div>
            <ul class="banner-bottom" slot="bottom">
                <li class="banner-bottom-item" v-for="j in listItem.length-1">
                    <img class="banner-bottom-item-pic" :src="listItem[j].url" alt="">
                    <img v-if="listItem[j].midUrl" class="banner-bottom-item-brand" :src="listItem[j].midUrl" alt="">
                    <span class="banner-bottom-item-span" v-if="listItem[j].price">¥{{listItem[j].price}}</span>
                </li>

            </ul>
        </vBanner>
    </div>
</template>

<script>
    import vBanner from '../../base/banner/index.vue'

    export default {
        name: "homeRecommend",
        components: {
            vBanner
        },
        data: () => {
            return {list: []}
        },
        methods: {
            getRecommend: function (id) {
                this.$http.get('http://localhost:3000/getRecommend?name=home&id=' + id).then((res) => {
                    this.list.push(res.body);
                })
            }
        },
        created() {
            for (let i = 1; i <= 3; i++) {
                this.getRecommend(i);
            }
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

        &-bottom {
            display: flex;
            width: 90%;

            &-item {
                flex: 1;
                text-align: center;

                &-pic {
                    width: 100%;
                    height: auto;
                }

                &-brand {
                    display: block;
                    align-items: center;
                    width: 50%;
                    margin: 0 auto;
                    height: auto;
                }

                &-span {
                    color: $link-active;
                }
            }

        }
    }

</style>
