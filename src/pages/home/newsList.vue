<template>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="(item) in list" :key="item">
            <router-link :to=item.link>
                <img class="mui-media-object mui-pull-left" :src=item.picInfo[0].url>
                <div class="mui-media-body">
                    {{item.title}}
                    <p class="mui-ellipsis">{{item.digest}}</p>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
    const axios = require('axios');
    export default {
        name: "newsList",
        data: () => {
            return {
                list: []
            }
        },
        created() {
            axios.get('https://www.apiopen.top/journalismApi').then((res) => {
                this.list = res.data.data.auto;
                console.log(this.list[0].picInfo)
            });
        }
    }
</script>

<style scoped>

</style>
