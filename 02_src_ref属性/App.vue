<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDOM">点击输出DOM元素</button>
        <School ref="sch"/>

    </div>

</template>
<!-- ref 属性

 1. 被用来给元素或子组件注册引用信息（id的替代者）
 2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
 3. 使用方式：
     1. 打标识：```<h1 ref="xxx">.....</h1>``` 或 ```<School ref="xxx"></School>```
     2. 获取：```this.$refs.xxx```


-->
<script>
    //引入School组件
    import School from './components/School'

    export default {
        name:'App',
        components:{School},
        data(){
            return{
                msg:'学习vue'
            }
        },
        methods:{
            showDOM(){
                console.log(this.$refs)
                console.log(this.$refs.title)//真实DOM元素
                console.log(this.$refs.btn)//真实DOM元素
                console.log(this.$refs.sch)//School组件的实例对象（vc）
            }
        }

    }
</script>