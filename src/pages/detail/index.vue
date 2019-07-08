<template>
    <div class="detail">
        <detailSlider @pushImg="getImg"></detailSlider>
        <detailInfo @pushInfo="getInfo"></detailInfo>
        <button class="detail-back" @click="back"><i class="iconfont icon-xialajiantou"></i></button>
        <detailNavBottom @addCart="addCart"></detailNavBottom>

        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
        >
            <div class="detail-animation-box" v-show="isImgShow">
                <img :src="firstImg" alt="">
            </div>
        </transition>
    </div>

</template>

<script>
    import detailSlider from './slider.vue'
    import detailInfo from './info.vue'
    import detailNavBottom from './navbottom.vue'

    export default {
        name: "index",
        components: {
            detailSlider,
            detailInfo,
            detailNavBottom
        },
        data: function () {
            return {
                firstImg: '',
                price: '',
                mark: '',
                title: '',
                shopName: '',
                isImgShow: false
            }
        },
        methods: {
            back: function () {
                this.$router.back(-1);
            },
            getImg: function (url) {
                this.firstImg = url;
            },
            getInfo: function (info) {
                this.price = info.price.now;
                this.mark = info.price.mark;
                this.title = info.title;
                this.shopName = info.shopName;
            },
            addCart: function () {
                this.isImgShow = true;

                const goodsObj = {
                    id: 0,
                    price: this.price,
                    mark: this.mark,
                    title: this.title,
                    shopName: this.shopName,
                    count: 1
                };
                this.$store.commit('addCart', goodsObj)
            },
            beforeEnter: function (el) {
                el.style.transform = 'translate(-50%, -50%)'
            },
            enter: function (el, done) {
                /*这里的offsetHeight是强制刷新动画*/
                el.offsetHeight;
                el.style.transform = `translate(${-window.innerWidth / 2 + 40}px,${window.innerHeight / 2 - 80}px) scale(.2)`;
                el.style.transition = ' all .5s ease-in';
                /*在enter和leave中必须调用done来结束动画 这里的done指的是afterEnter,否则，它们将被同步调用，过渡会立即完成。(不执行之后的方法)*/
                done();
            },
            afterEnter: function (el) {
                this.isImgShow = !this.isImgShow;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins";

    .detail {
        z-index: $search-z-index;
        position: absolute;
        width: 100%;

        &-back {
            z-index: $search-z-index+100;

            position: absolute;
            top: 20px;
            left: 20px;

            width: 50px;
            height: 50px;
            border-radius: 50%;

            background-color: rgba(0, 0, 0, .6);
            color: #fff;

            i {
                display: inline-block;
                transform: rotateZ(90deg);
                font-size: $icon-font-size-l;
            }
        }

        &-animation-box {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            width: 80px;
            height: 80px;
            border-radius: 50%;
            overflow: hidden;
            z-index: $backtop-z-index;

            img {
                width: 100%;
                height: auto;
            }
        }
    }
</style>
