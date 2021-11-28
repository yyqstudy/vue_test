<template>
    <li >
        <label>
<!--默认:checked="false"-->
<!--            <input type="checkbox" :checked="t odo.done" @click="handleCheck(to do.id)"/>-->
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
            <!--            <input type="checkbox" v-model="t odo.done"/>-->
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input
                    v-show="todo.isEdit"
                    type="text"
                    :value="todo.title"
                    @blur="handleBlur(todo,$event)"
                    ref="inputTitle"
            >
        </label>

        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit"  @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
    //引入pubsub-js，pubsub是一个对象，里面有很多方法
    import pubsub from'pubsub-js'
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
                    //第一种：调用父组件的函数
                    // this.deleteTodo(id)

                    //第二种：全局事件总线：提供数据
                   // this.$bus.$emit('deleteTodo',id)

                    //第三种：提供数据id（发布）
                    pubsub.publish('deleteTodo',id)
                }

            },
           //编辑
            handleEdit(todo){
                //如果todo已经有isEdit属性，就不要追加
                // eslint-disable-next-line no-prototype-builtins
                //if else把文字变成输入框
                // eslint-disable-next-line no-prototype-builtins
                if(todo.hasOwnProperty('isEdit')){
                    todo.isEdit = true
                }else{
                    //给todo追加属性isEdit(这样有对应的get和set）
                    this.$set(todo,'isEdit',true)
                }
                //点击编辑按钮，给编辑后的数据获取焦点

                //$nextTick在下一次 DOM 更新结束后执行其指定的回调函数。
                this.$nextTick(function (){
                    this.$refs.inputTitle.focus()
                } )

            },

            //失去焦点回调（真正执行修改逻辑）
            handleBlur(todo,e){
                todo.isEdit = false
                //如果input框编辑没内容
                if(!e.target.value.trim())return alert('输入不能为空')
                this.$bus.$emit('updatTodo',todo.id,e.target.value)
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