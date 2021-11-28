<template>
<!--    当total为0时候（false)，整个div不展示-->
    <div class="todo-footer" v-show="total">
        <label>
            <!--  底部的框，如果已完成 等于 全部， 方框被选上-->
<!--            <input type="checkbox" :checked="doneTotal === total"/>-->
<!--
:checked="isAll" ：初始化展示 底部的框，如果已完成 等于 全部， 底部方框被选上
@change="checkAll : 以后的交互 点击底部框，全选
-->
<!--            <input type="checkbox" :checked="isAll" @change="checkAll"/>-->

            <input type="checkbox" v-model="isAllall"/>
        </label>
        <span>
<!--            使用计算属性统计已完成-->
              <span>已完成{{doneTotal}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name:'MyFooter',
        props:['todos'],
        //统计已完成
        computed:{
            total(){

                return this.todos.length
            },
            doneTotal(){
                //第一种
               /* let i =0
                this.todos.forEach((todo)=>{
                    if(todo.done) i++
                })
                return i*/

                //第二种 reduce里面有两个参数：函数，0：其中0是表示统计的初始值
                /*const x =this.todos.reduce((pre,current)=>{
                    console.log('@',pre,current) //current是todoObj对象
                    //条件统计,如果current.done是true，就是1
                    return pre + (current.done? 1:0)
                },0)
                console.log(x)*/

                //简写版
                return this.todos.reduce((pre,todo)=> pre + (todo.done? 1:0),0)
            },
            isAll(){
                return this.doneTotal === this.total &&  this.total>0
            },

            isAllall:{
                get(){
                    return this.doneTotal === this.total &&  this.total>0
                },
                set(value){
                    //console.log('##',value)
                    // this.checkAllTodo(value)
                    this.$emit('checkAllTodo',value)
                }
            }
        },
        methods:{
            //通过操作底部框，告诉todos全选或者全不选
            //在App组件定义一个方法，接着在这里调用
            checkAll(e){
                 //console.log(e.target.checked)
                this.checkAllTodo(e.target.checked)
            },
            clearAll(){
                //在App组件定义一个方法，接着在这里调用
                // this.clearAllTodo()
                this.$emit('clearAllTodo')


            }
        }
    }

</script>

<style scoped>
    /*footer*/
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>