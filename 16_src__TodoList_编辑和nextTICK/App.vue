<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
<!--  子组件 ===> 父组件  添加自定义事件 -->
                <MyHeader @addTodo=" addTodo"/>
<!--  App组件把todos数组传给 MyList组件-->

                <MyList :todos="todos" />
                <MyFooter :todos="todos"
                          @checkAllTodo=" checkAllTodo"
                          @clearAllTodo="clearAllTodo"
                />
            </div>
        </div>
    </div>


</template>

<script>
    //引入pubsub-js，pubsub是一个对象，里面有很多方法
    import pubsub from'pubsub-js'
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
            //添加一个todo数据
            addTodo(todoObj){
                this.todos.unshift(todoObj)//往数组前面添加对象
            },

            //勾选/取消勾选一个todo
            checkTodo(id){
                this.todos.forEach((todo)=>{
                    //取反
                    if(todo.id === id) todo.done=!todo.done
                })
            },

           //编辑（更新一个todo)
            updatTodo(id,title){
                this.todos.forEach((todo)=>{
                    //如果id一样，就把todo.title改成你传过来的title
                    if(todo.id === id) todo.title= title
                })
            },

            //删除一个todo
            //pubsub中回调函数有两个参数，其中第一个是消息名，用‘_’占位
            deleteTodo(_,id){
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
        },


        //接收MyItem传过来的数据
        mounted() {
            //绑定编辑事件updatTodo
            this.$bus.$on('updatTodo',this.updatTodo)

            this.$bus.$on('checkTodo',this.checkTodo)
            //this.$bus.$on('deleteTodo',this.deleteTodo)

            //需要数据(订阅消息）
            // 在methods里面deleteTodo(msgName,id)或者deleteTodo(_,id)用‘_’占位
            this.pubId = pubsub.subscribe('deleteTodo',this.deleteTodo)

        },
        //销毁之前解绑
        beforeDestroy() {
            this.$bus.$off('updatTodo')
            this.$bus.$off('checkTodo')
            //this.$bus.$off('deleteTodo')

            //pubsub
            pubsub.unsubscribe(this.pubId)
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
    /* 配置编辑按钮样式*/
    .btn-edit{
        color: #fff;
        background-color: skyblue;
        border: 1px solid #5a92e7;
        margin-right: 5px;
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



