<template>
    <div class="school">

        <h2 >学校名称：{{name }}</h2>
        <h2 >地址:{{address}}</h2>




    </div>
</template>

<script>
    //引入pubsub-js，pubsub是一个对象，里面有很多方法
    import pubsub from'pubsub-js'
    export default {
        name:'School',
        data(){
            return{
                name:'scut',
                address:'广州',

            }
        },
        //在main.js的Vue原型写了x,看School组件是否读取到
        mounted() {
             //全局事件总线
            //School组件通过$bus绑定hello事件
            /*this.$bus.$on('hello',(data)=>{
                console.log ('我是School组件，收到了数据',data)
            })*/

            //接收数据（消息订阅）
            //参数：（1）消息名：hello；（2)回调函数，回调的参数是消息名、发布的数据
           this.pubId =  pubsub.subscribe('hello',(msgName,data)=>{
               //console.log(this)//写成箭头函数，this才是vm
               console.log('发布了hello消息，hello消息的回调函数执行了',msgName,data)
           })
        },
        beforeDestroy() {
            //this.$bus.$off('hello')

            //解绑订阅消息(通过this.pubId）
            pubsub.unsubscribe(this.pubId)
        }


    }
</script>

<!-- scoped 避免样式名相同冲突-->
<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>

