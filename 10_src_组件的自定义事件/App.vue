<template>
    <div class="app">
        <h1>{{msg}}学生姓名：{{studentName}}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"/>
        <hr>

<!-- 是给Student组件实列对象vc身上绑定一个事件，事件名叫peiqi；
如果以后触发这个事件，就会调用getStudentName函数
 怎么触发事件？谁绑定这个事件，找它去，找Student组件实列对象vc
 解绑触发事件？谁绑定这个事件，找它去 找Student组件实列对象vc解绑

 -->

<!--        通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on）-->
<!--        <Student v-on:peiqi="getStudentName"/>-->
<!--        <Student @peiqi.once="getStudentName"/>-->
<!--        <Student @peiqi="getStudentName" @demo="m1"/>-->


<!--
通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref）
  灵活性强：可以等几秒才获取
  然后通过this.$refs.student可以获取student组件的vc
  @click="show" 绑定原生DOM事件 需要使用```native```修饰符
-->
        <Student ref="student" @click.native="show"/>

    </div>
</template>

<script>

    //引入组件
    import Student from './components/Student'
    import School from './components/School'




    export default {
        name:'App',
        components:{Student,School},
        data(){
            return{
                msg:'hello ',
                studentName:''
            }
        },
        methods:{
            getSchoolName(name){
                console.log('App收到SchoolName：',name)

            },
            //ES6写法:...params
            getStudentName(name,...params){
                console.log('getStudentlName被调用,App收到StudentName:',name,params)
                this.studentName = name
            },
            m1(){
                console.log('demo事件被触发了')
            },
            show(){
                alert(123)
            }

        },
        mounted() {
            //$on()当XXX时候，当触发peiqi，执行回调getStudentName
            //等3秒才获取（灵活性强）
          /*  setTimeout(()=>{
                this.$refs.student.$on('peiqi',this.getStudentName)
            },3000)*/

            this.$refs.student.$on('peiqi',this.getStudentName)

           // this.$refs.student.$once('peiqi',this.getStudentName)//只能触发一次

        }


    }
</script>

<style>
    .app{
        background-color: green;
        padding: 5px;
    }
</style>