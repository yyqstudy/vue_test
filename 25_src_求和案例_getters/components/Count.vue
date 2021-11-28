<template>
    <div >
<!--组件中读取vuex中的数据  -->
        <h1>当前求和为：{{$store.state.sum}}</h1>
        <h3>当前求和放大10倍为：{{$store.getters.bigSum}}</h3>
        <h3>当前求和放大10倍为：{{$store.state.sum*10}}</h3>
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
    export default {
        name: 'Count',
        data(){
            return{
                n:1,

            }
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
            console.log('Count',this.$store)
        }
    }
</script>

<style>
    button{
        margin-left:5px ;
    }

</style>