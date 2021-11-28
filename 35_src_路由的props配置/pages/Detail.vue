<template>
    <div>
<!--        <li>消息编号：{{$route.params.id}}</li>-->
<!--        <li>消息标题：{{$route.params.title}}</li>-->
<!--        第一种写法-->
<!--        <li>a:{{a}}</li>-->
<!--        <li>b:{{b}}</li>-->

        <!--        第二种,第三种写法-->
        <li>消息编号：{{id}}</li>
        <li>消息编号：{{title}}</li>
    </div>

</template>
<script>
    export default {
        name:'Detail',
        //props:['a','b'],//第一种写法接收
        props:['id','title'],//第二种,第三种写法接收

        mounted() {
            //怎么接收Message组件的参数 看上面 {{$route.query.id}}
            console.log(this.$route) //$route里面有query属性，专门用来接收参数
        }
    }

</script>

<style>

</style>