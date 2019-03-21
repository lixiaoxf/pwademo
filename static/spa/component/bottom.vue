<template>
    <div class='site-bottom'>
        <a :class="[select=='videos'?'cur':'']" href='#/index' >主页</a>
        <a :class="[select=='news'?'cur':'']" href='#/index/news'>新闻</a>
    </div>
</template>

<script>
    export default {
        name:'bottom',
        computed:{
            select(){
                return this.$route.name
            }
        }
    }
</script>

<style lang="scss">
    @import '@/component/bottom/style/index.scss'
</style>