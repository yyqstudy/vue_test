<template>
    <div class="student">

        <h2 >学生姓名：{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
<!--  Student组件和School组件之间实现通信      -->
        <button @click="sendStudentNameToSchool">把学生名给School组件</button>
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
        //在main.js的Vue原型写了x,看Student组件是否读取到
        mounted() {
            //console.log('Student',this.x)
        },
        methods:{
            sendStudentNameToSchool(){
                //this.$bus.$emit('hello',666)
                this.$bus.$emit('hello',this.name)
            }
        }
    }
</script>
<!-- scoped 避免样式名相同冲突-->
<style scoped>
    .student{
        background-color: orange;
        padding: 5px;
        margin-top: 30px;
    }
</style>

