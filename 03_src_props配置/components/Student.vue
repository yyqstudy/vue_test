<template>
    <div >
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <!--         age比输入的数据多1-->
<!--        <h2>年龄：{{age+1}}</h2>-->

        <h2>年龄：{{myAge+1}}</h2>
        <button @click="updateAge">尝试修改收到的年龄</button>
    </div>
</template>

<script>
    export default {
        name:'Student',

        data(){
            return{
                msg:'MIT offer',
                //若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。
                myAge:this.age,
                /*name:'alex',
                sex:'male',
                age:17*/
            }
        },
        methods:{
            updateAge(){
                //this.age = 22 //最好不要修改年龄，优先外部传进来为主
                this.myAge++
            }
        },
        //props功能：让组件接收外部传过来的数据,优先级最高

        //第一种：简单接收
        props:['name','sex','age']


        //第二种：接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
      /*  props:{
            name:String,
            age:Number,
            sex:String
        }
*/
        //第三种：接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
       /* props:{
            name:{
                type:String,//name的类型是字符串
                require:true //name是必要的
            },
            age:{
                type:Number,
                default:99 //默认值
            },
            sex:{
                type:String,
                require:true
            }
        }
*/

    }
</script>

