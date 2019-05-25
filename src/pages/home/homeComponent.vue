<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item) in sliders" :key=sliders.indexOf(item)><img :src=item.picUrl></mt-swipe-item>
        </mt-swipe>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li v-for="(item) in navs" :key="item.linkUrl"
                    class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                    <router-link :to=item.linkUrl>
                        <span class="mui-icon"><img :src=item.picUrl alt=""></span>
                        <div class="mui-media-body">{{item.title}}</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    const axios=require('axios');
    export default {
        name: "homeComponent",
        data: () => {
            return {
                sliders: [],
                navs: [
                    {linkUrl: '/home/newsList', picUrl: require('../../images/nav0.png'), title: '新闻资讯'},
                    {linkUrl: 'share', picUrl: require('../../images/nav1.png'), title: '图片分享'},
                    {linkUrl: 'newsList1', picUrl: require('../../images/nav2.png'), title: '商品购买'},
                    {linkUrl: 'newsList2', picUrl: require('../../images/nav3.png'), title: '留言反馈'},
                    {linkUrl: 'newsList3', picUrl: require('../../images/nav4.png'), title: '视频专区'},
                    {linkUrl: 'newsList5', picUrl: require('../../images/nav5.png'), title: '联系我们'},
                    {linkUrl: 'newsList7', picUrl: require('../../images/nav6.png'), title: '优惠活动'},
                    {linkUrl: 'newsList9', picUrl: require('../../images/nav7.png'), title: '我的最爱'},

                ]
            }
        },
        created() {
            axios.get('https://www.imooc.com/api/home/slider').then((res) => {
                this.sliders = res.data['slider'];
            });

        }

    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;

        img {
            height: 200px;
            width: 100%;
        }
    }

    .mui-content {
        img {
            width: 75%;
        }
    }
</style>
