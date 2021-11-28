<template>
    <div >
<!--组件中读取vuex中的数据  -->
        <h1>当前求和为：{{sum}}</h1>
        <h3>*当前求和放大10倍为*：{{bigSum}}</h3>
        <h3>当前求和放大10倍为：{{$store.state.sum*10}}</h3>
        <hr>
        <h3>我在{{school}},学习{{$store.state.subject}}</h3>
        <select v-model.number="n">
<!-- value="1"改为   :value="1"，有冒号表示表达式是js表达式 解析，
     里面只看双引号的内容      -->
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>

    </div>

</template>

<script>
    //
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
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
            //...mapState({he:'sum',xuexiao:'school'}),

            //第二种：借助mapState生成计算属性，从state中读取数据。（数组写法）
            //如果he又改回sum（computed下面的方法和state属性同名,直接用数组写法
            ...mapState(['sum','school','subject']),


            /* ****************************************************** */
            //mapGetters
            //第一种：借助mapGetters生成计算属性，从getters中读取数据（对象写法）
            // ...mapGetters({bigSum:'bigSum'})

            //第二种：借助mapGetters生成计算属性，从getters中读取数据（数组写法）
            ...mapGetters(['bigSum'])



        },
        methods:{
            //第一种：借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
            ...mapMutations({increment:'JIA',decrement:'JIAN'}),

            //第二种（同名，methods里面方法名和Mutations属性对应）：借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
            // ...mapMutations(['JIA','JIAN']),


            //第三种：程序员亲自写方法
            //加法：vc直接和mutations对话（看图）
          /*  increment(){

                   this.$store.commit('JIA',this.n)
            },
            //减法: vc直接和mutations对话（看图）
            decrement(){
                this.$store.commit('JIAN',this.n)
            },*/



            /* ******************************************************* */
            //mapActions
            //第一种:借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
            ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

            //第二种:（同名，methods里面方法名和Actions属性对应）
            //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
            // ...mapActions(['jiaOdd','jiaWait'])

            //第三种：程序员亲自写方法
            /*incrementOdd(){
                    this.$store.dispatch('jiaOdd',this.n)
            },
            incrementWait(){
                    this.$store.dispatch('jiaWait',this.n)
            }*/
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