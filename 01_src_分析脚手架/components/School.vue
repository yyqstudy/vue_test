<template>
<!--    组件的结构-->
    <div class="demo">
        <h2>学校名称:{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
    //组件交互相关的代码(数据，方法）
    //暴露，对应别人引用import
    //单个暴露 在const前面写export
   /* const school =Vue.extend({
        //data要写成函数式
        data(){
            return{
                schoolName: 'SCUT',
                address: '广州',
            }
        },
        methods:{
            showName(){
                alert(this.schoolName)
            }
        }
    })
    export{school} //统一暴露
    //export default school//默认暴露*/

    //简写

    export default {
        name:'School',
        data(){
            return{
                schoolName: 'SCUT',
                address: '广州',
            }
        },
        methods:{
            showName(){
                alert(this.schoolName)
            }
        }
    }
</script>


<style>
    /*组件的样式*/
    .demo{
        background-color: orange;
    }
</style>