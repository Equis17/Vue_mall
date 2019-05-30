<template>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100" class="goods">
        <ul>
            <li class="goods-item" v-for="(item ,i) in itemList" :key="i">
                <div class="goods-item-img">
                    <router-link to="/detail/1">
                        <img :src="item.url" alt="">
                    </router-link>
                </div>
                <div class="goods-item-price">
                    <span class="goods-item-price-now">{{item.now}}</span>
                    <span class="goods-item-price-mark">{{item.mark}}</span>
                    <span class="goods-item-price-discount">{{item.discount}}折</span>
                </div>
                <div class="goods-item-title" @click="c"><span>{{item.title}}</span></div>
            </li>
        </ul>
        <h1 class="goods-title" v-if="busy&&times!==4">正在加载</h1>
        <h1 class="goods-title" v-if="done">加载完毕</h1>

    </div>
</template>

<script>
    import infiniteScroll from 'vue-infinite-scroll'

    export default {
        name: "goods",
        data: function () {
            return {
                itemList: [
                    {
                        url: '../../src/pages/search/download.jpg',
                        now: '¥458',
                        mark: '¥1899',
                        discount: '2.4',
                        title: 'Fleur Wood |Fleur Wood2019夏新品时尚网纱绣花蕾丝显瘦连衣裙'
                    },
                    {
                        url: '../../src/pages/search/1.jpg',
                        now: '¥358',
                        mark: '¥1499',
                        discount: '2.4',
                        title: 'Fleur Wood |Fleur Wood2019夏新品小众桔梗裙夏季印花连衣裙'
                    },
                    {
                        url: '../../src/pages/search/2.jpg',
                        now: '¥198',
                        mark: '¥798',
                        discount: '2.5',
                        title: '丝柏舍 |2019夏季连衣裙新款】女韩版纯色V领短袖收腰中长款连衣裙'
                    },
                    {
                        url: '../../src/pages/search/3.jpg',
                        now: '¥218',
                        mark: '¥499',
                        discount: '4.4',
                        title: '拉夏贝尔 |拉夏贝尔2019春夏新款短袖梭织中长款打底外穿百搭女式连衣裙'
                    },
                    {
                        url: '../../src/pages/search/1.jpg',
                        now: '¥218',
                        mark: '¥499',
                        discount: '4.4',
                        title: '她池 |【2019夏季新款】V领抽绳褶皱清新小碎花雪纺中长款连衣裙'
                    },
                    {
                        url: '../../src/pages/search/4.jpg',
                        now: '¥218',
                        mark: '¥499',
                        discount: '4.4',
                        title: '她池 |【2019夏季新款】V领抽绳褶皱清新小碎花雪纺中长款连衣裙'
                    }
                ],
                busy: false,
                done: false,
                times: 0
            }
        },
        methods: {
            getTest: function () {
                this.itemList.push({
                        url: '../../src/pages/search/download.jpg',
                        now: '¥458',
                        mark: '¥1899',
                        discount: '2.4',
                        title: 'Fleur Wood |Fleur Wood2019夏新品时尚网纱绣花蕾丝显瘦连衣裙'
                    },
                    {
                        url: '../../src/pages/search/1.jpg',
                        now: '¥358',
                        mark: '¥1499',
                        discount: '2.4',
                        title: 'Fleur Wood |Fleur Wood2019夏新品小众桔梗裙夏季印花连衣裙'
                    },
                    {
                        url: '../../src/pages/search/2.jpg',
                        now: '¥198',
                        mark: '¥798',
                        discount: '2.5',
                        title: '丝柏舍 |2019夏季连衣裙新款】女韩版纯色V领短袖收腰中长款连衣裙'
                    },
                    {
                        url: '../../src/pages/search/3.jpg',
                        now: '¥218',
                        mark: '¥499',
                        discount: '4.4',
                        title: '拉夏贝尔 |拉夏贝尔2019春夏新款短袖梭织中长款打底外穿百搭女式连衣裙'
                    },
                    {
                        url: '../../src/pages/search/1.jpg',
                        now: '¥218',
                        mark: '¥499',
                        discount: '4.4',
                        title: '她池 |【2019夏季新款】V领抽绳褶皱清新小碎花雪纺中长款连衣裙'
                    },
                    {
                        url: '../../src/pages/search/4.jpg',
                        now: '¥218',
                        mark: '¥499',
                        discount: '4.4',
                        title: '她池 |【2019夏季新款】V领抽绳褶皱清新小碎花雪纺中长款连衣裙'
                    });
            },
            loadMore: function () {
                this.busy = true;
                this.times++;
                if (this.times > 3) {
                    this.done = true;
                    return false;
                } else {
                    setTimeout(() => {
                        this.getTest();
                        this.busy = false;
                    }, 2000);
                }

            },
            c:function () {
                this.$router.back(-1);
            }
        },
        directives: {
            infiniteScroll
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .goods {
        padding-top: 88px;
        width: 100%;

        &-item {
            width: 50%;
            height: 300px;
            margin-bottom: 20px;
            float: left;
            padding: 0 5px 0 10px;

            &:nth-child(2n) {
                padding: 0 10px 0 5px;
            }

            &-img {
                img {
                    width: 100%;
                    height: auto;
                }
            }


            &-price {
                &-now {
                    font-size: ($icon-font-size-base)-2;
                    line-height: 35px;
                    padding-left: 10px;
                    color: #000000;
                }

                &-mark {
                    line-height: 35px;
                    vertical-align: top;
                    text-decoration: line-through;
                }

                &-discount {
                    line-height: 35px;
                    vertical-align: top;
                }
            }

            &-title {
                padding-left: 10px;
                font-size: $font-size-base+1;
                @include multiline-ellipsis(2);
            }
        }


        &-title {
            line-height: 30px;
            font-size: $icon-font-size-base;
            text-align: center;
        }
    }
</style>
