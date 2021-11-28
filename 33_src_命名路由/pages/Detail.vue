<template>
    <div>
        <li>消息编号：{{$route.query.id}}</li>
        <li>消息标题：{{$route.query.title}}</li>
    </div>

</template>
<script>
    export default {
        name:'Detail',
        mounted() {
            //怎么接收Message组件的参数 看上面 {{$route.query.id}}
            console.log(this.$route) //$route里面有query属性，专门用来接收参数
        }
    }

</script>

<style>

</style>