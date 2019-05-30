<template>
    <div class="info">
        <div class="info-price">
            <span class="info-price-now">¥229</span>
            <span class="info-price-mark">¥999</span>
            <span class="info-price-discount">2.3折</span>
        </div>
        <div class="info-title">
            <span>【2019夏季新款】V领抽绳褶皱清新小碎花雪纺中长款连衣裙</span>
        </div>
        <div class="info-credit-box">
            <div class="info-credit-box-item">
                <span class="info-credit-box-item-tag">唯品花</span>
                <span class="info-credit-box-item-content">开通唯品花0首付分期购物</span>
                <a href="#" class="info-credit-box-item-link">立即开通</a>
            </div>
            <div class="info-credit-box-item">
                <span class="info-credit-box-item-tag">唯品币</span>
                <span class="info-credit-box-item-content">开通唯品花0首付分期购物</span>
            </div>
        </div>
        <div class="info-size">
            <span class="info-size-title">尺码</span>
            <a href="#" class="info-size-link">查看尺码表</a>
            <ul class="info-size-btns">
                <li class="info-size-btns-active"><span>S</span></li>
                <li class="info-size-btns-disable"><span>M</span></li>
                <li class="info-size-btns-active"><span>L</span></li>
                <li class="info-size-btns-active"><span>XL</span></li>
                <li class="info-size-btns-disable"><span>XXL</span></li>

            </ul>
            <div style="clear: both;"></div>
        </div>
        <div class="info-send-address">
            <p>配送至</p>
            <span>请选择地址</span>
        </div>
        <div class="info-shop">
            <div class="info-shop-img">
                <img src="./brand.png" alt="">
            </div>
            <a class="info-shop-link" href="#">他池女装特卖旗舰店</a>
            <span class="info-shop-btn">收藏</span>
        </div>
        <div class="info-security">
            <img class="info-security-img" src="./security.png" alt="">
        </div>
        <div class="info-box">
            <p class="info-box-title">商品信息</p>
            <tbody>
            <tr class="info-box-item">
                <td>品牌名称：</td>
                <td>她池</td>
            </tr>
            <tr class="info-box-item">
                <td>商品名称：</td>
                <td>【2019夏季新款】V领抽绳褶皱清新小碎花雪纺中长款连衣裙</td>
            </tr>
            <tr class="info-box-item">
                <td>产地：</td>
                <td>中国</td>
            </tr>
            <tr class="info-box-item">
                <td>材质：</td>
                <td>面料：100%聚酯纤维 里料：100%聚酯纤维</td>
            </tr>
            <tr class="info-box-item">
                <td>洗涤说明：</td>
                <td>手洗最高40℃不可漂白平摊晾干不可翻转干低温烫最高110℃缓和干洗</td>
            </tr>
            <tr class="info-box-item">
                <td>风格：</td>
                <td>通勤&nbsp;&nbsp;小清新&nbsp;&nbsp;</td>
            </tr>
            <tr class="info-box-item">
                <td>流行元素：</td>
                <td>抽带&nbsp;&nbsp;荷叶边&nbsp;&nbsp;</td>
            </tr>
            <tr class="info-box-item">
                <td>适用场合：</td>
                <td>通勤&nbsp;&nbsp;</td>
            </tr>
            <tr class="info-box-item">
                <td>版型：</td>
                <td>修身&nbsp;&nbsp;</td>
            </tr>
            <tr class="info-box-item">
                <td>厚薄：</td>
                <td>薄&nbsp;&nbsp;</td>
            </tr>
            <tr class="info-box-item">
                <td>弹性：</td>
                <td>无弹&nbsp;&nbsp;</td>
            </tr>
            <tr class="info-box-item">
                <td>适用季节：</td>
                <td>夏&nbsp;&nbsp;</td>
            </tr>
            <tr class="info-box-item">
                <td>领型：</td>
                <td>V领&nbsp;&nbsp;</td>
            </tr>
            <tr class="info-box-item">
                <td>裙长：</td>
                <td>中长裙&nbsp;&nbsp;</td>
            </tr>
            <tr class="info-box-item">
                <td>袖型：</td>
                <td>喇叭袖&nbsp;&nbsp;</td>
            </tr>
            <tr class="info-box-item">
                <td>袖长：</td>
                <td>五分袖&nbsp;&nbsp;</td>
            </tr>
            <tr class="info-box-item">
                <td>腰型：</td>
                <td>中腰&nbsp;&nbsp;</td>
            </tr>
            <tr class="info-box-item">
                <td>适用人群：</td>
                <td>青年&nbsp;&nbsp;</td>
            </tr>
            <tr class="info-box-item">
                <td>面料：</td>
                <td>聚酯纤维&nbsp;&nbsp;</td>
            </tr>
            <tr class="info-box-item">
                <td>选购热点：</td>
                <td>主推款&nbsp;&nbsp;</td>
            </tr>
            <tr class="info-box-item">
                <td>图案：</td>
                <td>碎花&nbsp;&nbsp;</td>
            </tr>
            <tr class="info-box-item">
                <td>款式：</td>
                <td>套头&nbsp;&nbsp;</td>
            </tr>
            </tbody>
        </div>

        <div v-if="true" class="info-explain">
            <p>售后说明</p>
            <span>售后与价格说明</span>
        </div>
        <div v-else class="info-explain">
            <p>售后与咨询</p>
            <ul class="info-explain-list">
                <li>
                    <p>退货说明</p>
                    <span>该商品支持7天无理由退货，请您放心购买。</span>
                </li>
                <li>
                    <p>换货说明</p>
                    <span>该商品支持换货，订单签收7天内可申请换货。
                    </span>
                </li>
                <li>
                    <p>价格说明</p>
                    <span>唯品会展示的中间未划横线价格（显示如¥799）为唯品会销售价，该价格是交易成交价，是您最终决定是否购买商品的依据。
                        <br>
                        <br>唯品会展示的中间划横线价格（显示如
                        ¥2899）为参考价，采集自品牌专柜标价、商品吊牌价、品牌官网价格或由供应商提供的正品零售价；由于地区、时间、货币汇率等的差异及存在品牌方调价、市场行情波动、产品批次等因素，品牌专柜标价、商品吊牌价等可能会与您购物时网页显示的划线价不一致。该价格仅供您参考。
                        <br>
                        <br>折扣比为唯品会销售价与参考价的对比（该值四舍五入后采小数点后1位，如¥799/¥2899=0.2756=2.8折），该对比值仅供您参考，不作为结算基数。
                        <br></span>
                </li>
            </ul>
        </div>

        <div class="info-img-box">
            <img v-for="(item,i) in imgUrl" :src="item" alt="" :key="i">
        </div>

    </div>
</template>

<script>
    export default {
        name: "info",
        data: function () {

            return {
                imgUrl: ['../src/pages/detail/img1.jpg',
                    '../src/pages/detail/img2.jpg',
                    '../src/pages/detail/img3.jpg',
                    '../src/pages/detail/img4.jpg',
                    '../src/pages/detail/img5.jpg',
                    '../src/pages/detail/img6.jpg',
                    '../src/pages/detail/img7.jpg',
                    '../src/pages/detail/img8.jpg',
                    '../src/pages/detail/img9.jpg',
                    '../src/pages/detail/img10.jpg',
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .info {
        padding-left: 15px;
        padding-right: 15px;
        background-color: #fff;

        &-price {
            height: 50px;
            border-bottom: 1px solid $border-color;

            &-now {
                font-size: ($icon-font-size-l)+2;
                line-height: 50px;
                color: #000;
            }

            &-mark {
                vertical-align: top;
                line-height: 50px;
                font-size: $font-size-l;
                text-decoration: line-through;
            }

            &-discount {
                vertical-align: top;
                line-height: 50px;
                font-size: $font-size-l;

            }
        }

        &-title {
            padding-top: 15px;
            border-bottom: 1px solid $border-color;
            height: 70px;
            line-height: 18px;
            font-size: $font-size-l+1;
            color: #000;

        }

        &-credit-box {
            height: 88px;
            padding: 15px 0;
            border-bottom: 1px solid $border-color;

            &-item {
                line-height: 30px;

                &-tag {
                    display: inline-block;
                    padding: 0 3px;
                    border: 1px solid $link-active;
                    font-size: 12px;
                    line-height: 15px;
                    color: $link-active;
                }

                &-content {
                    padding-left: 10px;
                    color: #000;
                    font-size: 13px;
                }

                &-link {
                    float: right;
                    font-size: 13px;
                    color: #488fdf;

                }
            }
        }

        &-size {
            padding: 15px 0;
            border-bottom: 1px solid $border-color;

            &-title {
                font-size: 15px;
                color: #000;
            }

            &-link {
                float: right;
                font-size: 13px;
                color: #488fdf;
            }

            &-btns {
                padding: 10px 0;

                li {
                    float: left;

                    margin: 0 0 10px 10px;
                    border: 1px solid $border-color;
                    border-radius: 5px;
                    width: 30%;
                    text-align: center;
                    line-height: 35px;
                    font-size: 13px;
                    color: #000;
                }

                &-active {

                }

                &-disable {
                    background-color: rgba(122, 122, 122, .2);

                    span {
                        color: rgba(122, 122, 122, .6);
                    }
                }
            }
        }

        &-send-address {
            padding: 15px 0;
            border-bottom: 1px solid $border-color;

            p {
                font-size: 15px;
                line-height: 25px;
                color: #000;
            }

            span {
                line-height: 25px;
                font-size: 13px;
            }
        }

        &-shop {
            padding: 15px 0;
            border-bottom: 1px solid $border-color;

            &-img {
                display: inline-block;
                border: 1px solid $border-color;
                height: 63px;
                vertical-align: middle;

                img {
                    position: relative;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 65px;
                    height: auto;
                }

            }

            &-link {
                font-size: 15px;
                color: #000;
                padding-left: 10px;
            }

            &-btn {
                margin-left: 50px;
                padding: 0 20px;
                border: 1px solid $link-active;
                border-radius: 5px;

                line-height: 16px;
                font-size: 14px;
                color: $link-active;
            }


        }

        &-security {
            padding: 15px 0;
            border-bottom: 1px solid $border-color;

            &-img {
                width: 100%;
                height: auto;
            }
        }

        &-box {
            padding: 15px 0;
            border-bottom: 1px solid $border-color;

            &-title {
                line-height: 20px;
                font-size: 14px;
                color: #000;
            }

            &-item {
                line-height: 20px;

                td:nth-child(1) {
                    width: 75px;
                }
            }
        }

        &-explain {
            padding: 15px 0;
            border-bottom: 1px solid $border-color;

            p {
                font-size: 15px;
                line-height: 25px;
                color: #000;
            }
        }

        &-img-box{
            img{
                width: 100%;
                height: auto;
            }
        }
    }
</style>
