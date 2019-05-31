<template>
    <div>
        <vBanner class="banner" v-for="(listItem,i) in list" :key="i">

            <div class="banner-top" slot="top">
                <img v-lazy=listItem[0].url alt="">
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
            },
            getTest: function () {
                this.list.push([{
                    "name": "home",
                    "url": "../src/pages/home/3-1.jpg",
                    "part": 0,
                    "midUrl": null,
                    "price": null,
                    "id": 1
                }, {
                    "name": "home",
                    "url": "../src/pages/home/3-2.jpg",
                    "part": 1,
                    "midUrl": null,
                    "price": null,
                    "id": 1
                }, {
                    "name": "home",
                    "url": "../src/pages/home/3-3.jpg",
                    "part": 1,
                    "midUrl": null,
                    "price": null,
                    "id": 1
                }, {
                    "name": "home",
                    "url": "../src/pages/home/3-4.jpg",
                    "part": 1,
                    "midUrl": null,
                    "price": null,
                    "id": 1
                }]);
                this.list.push([{
                    "name": "home",
                    "url": "../src/pages/home/4-1.jpg",
                    "part": 0,
                    "midUrl": null,
                    "price": null,
                    "id": 2
                }, {
                    "name": "home",
                    "url": "../src/pages/home/4-2.jpg",
                    "part": 1,
                    "midUrl": "../src/pages/home/4-2-1.png",
                    "price": "128",
                    "id": 2
                }, {
                    "name": "home",
                    "url": "../src/pages/home/4-3.jpg",
                    "part": 1,
                    "midUrl": "../src/pages/home/4-3-1.png",
                    "price": "321",
                    "id": 2
                }, {
                    "name": "home",
                    "url": "../src/pages/home/4-4.jpg",
                    "part": 1,
                    "midUrl": "../src/pages/home/4-4-1.png",
                    "price": "220",
                    "id": 2
                }, {
                    "name": "home",
                    "url": "../src/pages/home/4-5.jpg",
                    "part": 1,
                    "midUrl": "../src/pages/home/4-5-1.png",
                    "price": "184",
                    "id": 2
                }]);
                this.list.push([{
                    "name": "home",
                    "url": "../src/pages/home/4-1.jpg",
                    "part": 0,
                    "midUrl": null,
                    "price": null,
                    "id": 3
                }, {
                    "name": "home",
                    "url": "../src/pages/home/5-2.jpg",
                    "part": 1,
                    "midUrl": "../src/pages/home/5-2-1.png",
                    "price": "102",
                    "id": 3
                }, {
                    "name": "home",
                    "url": "../src/pages/home/5-3.jpg",
                    "part": 1,
                    "midUrl": "../src/pages/home/5-3-1.png",
                    "price": "88",
                    "id": 3
                }, {
                    "name": "home",
                    "url": "../src/pages/home/5-4.jpg",
                    "part": 1,
                    "midUrl": "../src/pages/home/5-4-1.png",
                    "price": "480",
                    "id": 3
                }]);

            }
        }
        ,
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
