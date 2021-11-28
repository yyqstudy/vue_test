<template>
    <div class="student">

        <h2 >学生姓名：{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <h2>当前求和为：{{number}}</h2>
        <button @click="add">点我number++</button>
        <button @click="sendStudentName">把学生名给App组件</button>
        <button @click="unbind">解绑peiqi事件</button>
        <button @click="death">销毁当前Student组件的实例(vc)</button>


    </div>
</template>

<script>

    export default {
        name:'Student',

        data(){
            return{
                name:'alex',
                sex:'male',
                number:0
            }
        },
        //Student组件实列对象vc ===> this
        methods:{
            add(){
                console.log('add被调用了')
                this.number++
            },
            sendStudentName(){
                //Student组件实列对象vc ===> this
                // 触发Student组件实列对象vc身上peiqi事件
                this.$emit('peiqi',this.name,888,99,666)
                //this.$emit('demo')

            },
            unbind(){
                // 解绑触发事件？谁绑定这个事件，找它去 找Student组件实列对象vc解绑
                //解绑一个自定义事件
                this.$off('peiqi')


                //解绑多个自定义事件
                //this.$off(['peiqi','demo'])

                //解绑所有的自定义事件
                //this.$off()

            },
            death(){
               this.$destroy()//销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效。
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

