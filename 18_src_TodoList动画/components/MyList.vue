<template>
    <ul class="todo-main">
<!--  第二步：根据数据的数量遍历决定使用多少次 MyItem     -->
<!--        第三步：给MyItem传递数据-->
        <transition-group name="todo" appear>
            <MyItem
                    v-for="todoObj in todos"
                    :key="todoObj.id"
                    :todo="todoObj"
            />
        </transition-group>


    </ul>
</template>

<script>
    import MyItem from './MyItem'
    export default {
        name:'MyList',
        components:{MyItem},
        props:['todos']
/*
        data(){
            return{
                // 第一步：[] 存放数据
                todos:[
                    {id:'001',title:'吃饭',done:true},
                    {id:'002',title:'看书',done:true},
                    {id:'003',title:'运动',done:true}
                ]
            }
        }*/
    }

</script>

<style scoped>
    /*main*/
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }

    /*因为上面配置了name*/
    .todo-enter-active{
        /*linear 匀速*/
        animation: comeAndLeave 1s linear;
    }
    .todo-leave-active{
        animation: comeAndLeave 1s linear reverse;
    }

    /*动画样式：出现的动画*/
    @keyframes comeAndLeave {
        from{
            /*从右边进来*/
            transform: translate(100%);
        }
        to{
            transform: translate(0px);
        }
    }
</style>