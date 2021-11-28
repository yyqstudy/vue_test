<template>
    <div >
<!--组件中读取vuex中的数据  -->
        <h1>当前求和为：{{he}}</h1>
        <h3>*当前求和放大10倍为*：{{bigSum}}</h3>
        <h3>当前求和放大10倍为：{{$store.state.sum*10}}</h3>
        <hr>
        <h3>我在{{xuexiao}},学习{{$store.state.subject}}</h3>
        <select v-model.number="n">
<!-- value="1"改为   :value="1"，有冒号表示表达式是js表达式 解析，
     里面只看双引号的内容      -->
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>

    </div>

</template>

<script>
    //
    import {mapState,mapGetters} from 'vuex'
    export default {
        name: 'Count',
        data(){
            return{
                n:1,

            }
        },
        computed:{
            //mapState
            //第一种：借助mapState生成计算属性，从state中读取数据。（对象写法）
            // ES6语法
            ...mapState({he:'sum',xuexiao:'school'}),

            //第二种：借助mapState生成计算属性，从state中读取数据。（数组写法）
            //如果he又改回sum（computed下面的方法和state属性同名,直接用数组写法
            // ...mapState(['sum','school','subject']),

            //第三种：靠程序员自己亲自去写计算属性
            /*he(){
                return this.$store.state.sum
            },
            xuexiao(){
                return this.$store.state.school
            },*/


            /* ****************************************************** */
            //mapGetters
            //第一种：借助mapGetters生成计算属性，从getters中读取数据（对象写法）
            // ...mapGetters({bigSum:'bigSum'})

            //第二种：借助mapGetters生成计算属性，从getters中读取数据（数组写法）
            ...mapGetters(['bigSum'])

            // 靠程序员自己亲自去写计算属性
           /* bigSum(){
                return this.$store.getters.bigSum
            }*/


        },
        methods:{
            //加法：vc直接和mutations对话（看图）
            increment(){

                   this.$store.commit('JIA',this.n)
            },
            //减法：vc先通过actions，再和mutations对话（看图），实现功能都一样
            decrement(){
                // 组件中修改vuex中的数据
                this.$store.dispatch('jian',this.n)
            },
            incrementOdd(){
                    this.$store.dispatch('jiaOdd',this.n)
            },
            incrementWait(){
                    this.$store.dispatch('jiaWait',this.n)
            }
        },
        mounted() {
            //测试vue components看得见store,控制台出现$store
            //console.log('Count',this.$store)

            //测试mapState是什么
           /* const x =mapState({he:'sum',xuexiao:'school'})
            console.log(x)*/

        }
    }
</script>

<style>
    button{
        margin-left:5px ;
    }

</style>