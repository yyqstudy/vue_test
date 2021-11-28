<template>
    <div class="demo">

        <h2 >学生姓名：{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>


    </div>
</template>

<script>

    export default {
        name:'Student',

        data(){
            return{
                name:'alex',
                sex:'male',
            }
        },


    }
</script>
<!-- scoped 避免样式名相同冲突-->
<style scoped>
    .demo{
        background-color: orange;
    }
</style>

