<template>
    <div class="school">

        <h2 >学校名称：{{name }}</h2>
        <h2 >地址:{{address}}</h2>




    </div>
</template>

<script>


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
             //console.log('School',this.x)
            //为什么this能调用$on,$off,$emit? 因为$on,$off,$emit在Vue原型上
            //School组件通过$bus绑定hello事件
            this.$bus.$on('hello',(data)=>{
                console.log ('我是School组件，收到了数据',data)
            })
        },
        beforeDestroy() {
            this.$bus.$off('hello')
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

