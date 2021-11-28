<template>
    <div class="demo">

        <h2 >学校名称：{{name }}</h2>
        <h2 class="title">地址:{{address}}</h2>



    </div>
</template>

<script>


    export default {
        name:'School',
        data(){
            return{
                name:'scut234444',
                address:'广州',

            }
        }



    }
</script>

<!-- scoped 避免样式名相同冲突-->
<style scoped>
    .demo{
        background-color: skyblue;
    }
</style>

