<template>
    <div class='site-wrap no-bottom'>
        <header class='site-header'>
            <top></top>
        </header>
        <section class='site-content'>
            <div class='site-content-inner'>     
                <router-view/>
            </div>
        </section>
   </div>
</template>

<script>
    import top from '@/spa/component/top.vue';
    export default {
        name:'nobottom',
        components:{
            top
        }
    }
</script>

<style lang="scss">
    @import '@/component/layout/style/noBottom.scss';
</style>