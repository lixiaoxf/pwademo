<template>
    <div class="news-list">
        <template v-if='loaded'> 
            <a v-for='(item,index) in list' :key=index :href='"#/detail?id="+item.id' class='news-card'>
                <p>{{item.sectitle}}</p>
                <div :style='{backgroundImage:"url("+item.icon+")"}'></div> 
            </a>
        </template>
        <template v-else>
            <div v-for='(item,index) in defaultNum' :key=index class='default-news-card'>
                <p></p>
                <span></span>
            </div>
        </template>
    </div>
</template>

<script>
    import axios from 'axios';
    import cacheUtil from '@/common/js/cacheUtil.js';
    export default {
        name:'news',
        data(){
            return {
                list:[],
                defaultNum:12 ,
                loaded:false
            }
        },
        methods:{
            renderData(res){
                this.loaded = true;
                if(res.error==0){
                    this.list = res.data;
                }
            },
            service(){
                let url = '/api/v1/news';
                cacheUtil.cacheNService(url,this.renderData);
            }
        },
        mounted(){
            this.service();
        }
    }
</script>

<style lang="scss">
    @import '@/ssr/news/style/index.scss';
    .news-list{
        .default-news-card{
            box-sizing: border-box;
            padding: rem(10) rem(20);
            height: rem(150);
            display: flex;
            margin-bottom: rem(10);
            p{
                width: rem(490);
                height: 100%;
                background:#e0e0e0;
                margin-right:rem(10);
                border-radius: rem(15);
            }
            span{
                width: rem(220);
                border-radius: rem(15);
                height: 100%;
                background:#e0e0e0;
            }
        }
    }
</style>