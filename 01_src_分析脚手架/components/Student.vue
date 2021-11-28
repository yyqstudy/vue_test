<template>
<!--    组件的结构-->
    <div >
        <h2>学生姓名:{{name}}</h2>
        <h2>年龄：{{age}}</h2>
    </div>
</template>

<script>
// 组件交互
    export default {
        name:'Student',
        data(){
            return{
                name: 'alex',
                age: 18,
            }
        }
    }
</script>


<style>
    /*组件的样式*/
</style>