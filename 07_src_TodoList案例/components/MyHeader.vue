<template>

    <div class="todo-header">
<!--        @keyup.enter 绑定键盘事件-->
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
    </div>
</template>
<script>
    import {nanoid} from 'nanoid'
    export default {
        name:'MyHeader',
        //接收从App传递过来的addTodo
        props:['addTodo'],
        data(){
            return{
                title: ''
            }
        },
        methods:{
            add(){
                //校验数据,this.title不是空才可以添加
                if(!this.title) return alert('输入不能为空')
              //console.log(e.target.value)//打印键盘输入的值
                //1、将用户的输入包装成一个todoObj对象

                const todoObj ={id:nanoid(),title:this.title,done:false}
                //console.log(todoObj)

                //2、如何将这个对象交给MyList组件:通过父组件App
                //Header组件调用父组件App的一个方法
                //通知App组件去添加一个todo对象
                this.addTodo(todoObj)
                //添加成功后input框要清空,清空输入
                 this.title=''

            }
        }
    }

</script>

<style scoped>
    /*header*/
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }


</style>