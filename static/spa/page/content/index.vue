<template>
    <div class="video-list">
        <template v-if='loaded'> 
            <a v-for='(item,index) in list' :key=index :href='"#/detail?id="+item.id' class='video-card'>
                <div :style='{backgroundImage:"url("+item.icon+")"}'></div> 
                <p>{{item.title}}</p>
            </a>
        </template>
        <template v-else>
            <div v-for='(item,index) in loadShowNum' :key=index class="default-video-card">
                <span></span>
                <p></p>
            </div>
        </template>
        
    </div>
</template>

<script>
    import axios from 'axios';
    import cacheUtil from '@/common/js/cacheUtil.js'
    export default {
        name:'videos',
        data(){
            return {
                list:[],
                loaded:false,
                loadShowNum:12
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
                let url = '/api/v1/videos';
                cacheUtil.cacheNService(url,this.renderData);
            }
        },
        mounted(){
            this.service();
        }
    }
</script>

<style lang="scss">
    @import '@/ssr/index/style/index.scss';
    .video-list{
        .default-video-card{
            width: rem(350);
            
            box-sizing: border-box;
            padding: rem(5);
            margin-bottom: rem(15);
            span{
                width: 100%;
                height: rem(200);
                margin-bottom: rem(5);
                background:#e0e0e0;
                display: block;
                border-radius: rem(15);
            }
            p{
                height: rem(35);
                background:#e0e0e0;
                border-radius: rem(10);
            }
        }
    }
</style>