<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader :addTodo=" addTodo"/>
<!--          App组件把todos数组传给 MyList组件-->

                <MyList :todos="todos"
                        :checkTodo ="checkTodo"
                        :deleteTodo = "deleteTodo"
                />
                <MyFooter :todos="todos"
                          :checkAllTodo=" checkAllTodo"
                          :clearAllTodo="clearAllTodo"
                />
            </div>
        </div>
    </div>


</template>

<script>

    //引入组件
    import MyList from './components/MyList'
    import MyFooter from './components/MyFooter'
    //import MyItem from './components/MyItem' (是MyList子组件）
    import MyHeader from './components/MyHeader'




    export default {
        name:'App',
        components:{MyHeader, MyList,MyFooter},


        //本地存储，把todos数据存储在 F12 中的Application里面的Local Storage
        data(){
            return{
                // 读取数据: 空数组是为了防止null报错
                todos:JSON.parse(localStorage.getItem('todos')) || []
            }
        },

        methods:{
            //Header 里面的todoObj对象如何传给父组件App
            //添加数据
            addTodo(todoObj){
                this.todos.unshift(todoObj)//往数组前面添加对象
            },

            //勾选/取消勾选
            checkTodo(id){
                this.todos.forEach((todo)=>{
                    //取反
                    if(todo.id === id) todo.done=!todo.done
                })
            },

            //删除
            deleteTodo(id){
                this.todos = this.todos.filter((todo)=>{
                    //过滤条件
                    return todo.id !== id
                })
            },

            //全选或者全不选
            checkAllTodo(done){
                this.todos.forEach((todo)=>{
                    todo.done = done //无论之前的t odo.done是true还是false，现在只听从done
                })
            },

            //清空所有已完成
            clearAllTodo(){
                this.todos = this.todos.filter((todo)=>{
                    return !todo.done //done为true的都不要
                })
            }
        },

        //捕获todos的操作（本地存储）
        watch:{

            //value是新的数据
           todos:{
               deep:true, //深度监视，这样勾选之后，done的true/false会改变
               handler(value){
                   localStorage.setItem('todos',JSON.stringify(value))
               }

           }
        }



    }
</script>

<style>
    /*base*/
    body {
        background: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus {
        outline: none;
    }

    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }







</style>



