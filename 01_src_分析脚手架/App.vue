<template>
    <!--  第二步  组件的结构-->
    <div>
        <img src="./assets/logo.png" alt="logo">
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    // 组件交互
    //需求；组件app管理着组件student和school
    //第一步
    //引入组件
    import School from './components/School.vue'
    import Student from "./components/Student.vue";

    export default {
        name:'App',
        components:{
            School,
            Student
        }
    }
</script>

<style>
    /*组件的样式*/
</style>