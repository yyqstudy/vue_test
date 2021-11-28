<template>
    <h2>我是Home的内容</h2>
</template>

<script>


    export default {
        name:'Home',
        beforeDestroy() {
            console.log('Home组件即将被销毁')
        },
        mounted() {
            console.log('Home组件挂载完毕',this)//出现了`$route，$router
            //验证Home组件和About组件的$route和$router是不是一样
            window.homeRoute = this.$route //把About组件身上$route放在window的aboutRoute里面
            window.homeRouter = this.$router
        }



    }
</script>
