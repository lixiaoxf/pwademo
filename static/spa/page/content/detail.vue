<template>
    <div class='detail' v-if='detail&&loaded'>
        <div class='detail-title'>{{detail.title}}</div>
        <div class='detail-user'>作者：{{detail.user}}</div>
        <div class='detail-img' :style="{backgroundImage:'url('+detail.icon+')'}"></div>
        <p class='detail-content'>{{detail.content}}</p>
    </div>
    <div v-else class='default-detail-card'>
        <div class='detail-title'></div>
        <div class='detail-user'></div>
        <div class='detail-img'></div>
        <div class='detail-content'>
            <p v-for='(item,index) in 12' :key=index></p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import cacheUtil from '@/common/js/cacheUtil.js';
    export default {
        name:'videos',
        data(){
            return {
                detail:null,
                loaded:false
            }
        },
        methods:{
            renderData(res){
                this.loaded = true;
                if(res.error==0){
                    this.detail = res.data;
                }
            },
            service(){
                var id = this.$route.query.id
                let url = '/api/v1/detail/'+id;
                cacheUtil.cacheNService(url,this.renderData);
            }
        },
        mounted(){
            this.service()
            // var id = this.$route.query.id
            // axios.get('/api/v1/detail/'+id).then(res=>{
            //     this.loaded = true;
            //     let ndata = res.data;
            //     if(ndata.error==0){
            //         this.detail = ndata.data;
            //     }
            // })
        }
    }
</script>

<style lang="scss">
    @import '@/ssr/detail/style/index.scss';
    .default-detail-card{
        padding: rem(20);
        .detail-title{
            height: rem(75);
            background:#e0e0e0;
            border-radius: rem(10);
            margin-bottom: rem(10);
        }
        .detail-user{
            height: rem(40);
            width: rem(150);
            background:#e0e0e0;
            border-radius: rem(10);
            margin-bottom:rem(10);
        }
        .detail-img{
            width: 100%;
            height: rem(400);
            background:#e0e0e0;
            border-radius: rem(10);
            margin-bottom:rem(10);
        }
        .detail-content{
            p{
                border-radius: rem(10);
                height: rem(40);
                margin-bottom:rem(10);
                background:#e0e0e0;
            }
            
        }
    }
</style>