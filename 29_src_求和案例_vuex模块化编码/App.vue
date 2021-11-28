<template>
        <div >
          <Count/>
            <hr/>
            <Person/>
        </div>
</template>

<script>

    //引入组件
    import Count from "./components/Count";
    import Person from "./components/Person";
    export default {
        name:'App',
        components: {Count,Person},
        mounted() {
            //vue components看得见store,控制台出现$store
            //console.log('App',this)
        }

    }
</script>

<style >

</style>



