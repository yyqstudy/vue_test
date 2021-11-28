<template>
    <div >
<!--        测试能使用plugins里面过滤器-->
        <h2 >学校名称：{{name | mySlice}}</h2>
        <h2>地址:{{address}}</h2>
        <!--        测试能使用plugins里面的hello-->
        <button @click="test">点我测试hello方法</button>

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
        },
        methods:{
            test(){
                this.hello()
            }
        }



    }
</script>

