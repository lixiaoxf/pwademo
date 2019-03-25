<template>
    <div class='site-wrap'>
        <header class='site-header'>
            <top></top>
        </header>
        <section class='site-content'>
            <div class='site-content-inner'>            
                <router-view/>
            </div>
        </section>
        <footer class='site-footer'>
           <bottom></bottom>
        </footer>
   </div>
</template>

<script>
    import top from '@/spa/component/top.vue';
    import bottom from '@/spa/component/bottom.vue';
    export default {
        name:'page',
        components:{
            top,
            bottom
        }
    }
</script>

<style lang="scss">
    @import '@/component/layout/style/index.scss'
</style>