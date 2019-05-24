<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../../images/l1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../images/l2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../images/l3.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../images/l4.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../images/l5.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../images/l6.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../images/l7.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../images/l8.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><img src="../../images/nav0.png" alt=""></span>
                    <div class="mui-media-body">分类</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><img src="../../images/nav1.png" alt=""></span>
                    <div class="mui-media-body">送货上门</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><img src="../../images/nav2.png" alt=""></span>
                    <div class="mui-media-body">购物车</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><img src="../../images/nav3.png" alt=""></span>
                    <div class="mui-media-body">个人信息</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><img src="../../images/nav4.png" alt=""></span>
                    <div class="mui-media-body">话费充值</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><img src="../../images/nav5.png" alt=""></span>
                    <div class="mui-media-body">优惠券</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><img src="../../images/nav6.png" alt=""></span>
                    <div class="mui-media-body">优惠活动</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
                    <span class="mui-icon"><img src="../../images/nav7.png" alt=""></span>
                    <div class="mui-media-body">我的最爱</div>
                </a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homeComponent"
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
