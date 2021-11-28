<template>
        <div >
          <Count/>
        </div>
</template>

<script>

    //引入组件
    import Count from "./components/Count";
    export default {
        name:'App',
        components: {Count},
        mounted() {
            //vue components看得见store,控制台出现$store
            //console.log('App',this)
        }

    }
</script>

<style >

</style>



