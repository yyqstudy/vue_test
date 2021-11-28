<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <School/>
        <Student/>

        <hr>


    </div>
</template>

<script>

    //引入组件
    import Student from './components/Student'
    import School from './components/School'




    export default {
        name:'App',
        components:{Student,School},
        data(){
            return{
                msg:'hello ',
                studentName:''
            }
        },


    }
</script>

<style>
    .app{
        background-color: green;
        padding: 5px;
    }
</style>