<template>
    <li >
        <label>
<!--默认:checked="false"-->
<!--            <input type="checkbox" :checked="t odo.done" @click="handleCheck(to do.id)"/>-->
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
            <!--            <input type="checkbox" v-model="t odo.done"/>-->
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
    export default {
        name:'MyItem',
        //props接收外部数据，声明接收todo对象
        props:['todo'],
        methods:{
            //勾选或者取消勾选
            handleCheck(id){
                // 全局事件总线：提供数据
                this.$bus.$emit('checkTodo',id)
            },
            //删除
            handleDelete(id){
                //confirm是根据用户交互来决定布尔值为真（点击确定）还是为假
                if(confirm('确定删除吗？')){

                    // this.deleteTodo(id)
                    //全局事件总线：提供数据
                    this.$bus.$emit('deleteTodo',id)
                }

            }
        }

    }

</script>

<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
    /*悬浮效果*/
    li:hover{
        background-color: #ddd;
    }
    /*悬浮效果显示删除按钮*/
    li:hover button{
        display: block;
    }
</style>