<template>
    <div >
        <h1>当前求和为：{{sum}}</h1>
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
                sum:0,
            }
        },
        methods:{
            increment(){
               this.sum = this.sum + this.n
            },
            decrement(){
                this.sum = this.sum  - this.n
            },
            incrementOdd(){
                //如果是偶数，余数为0，false进不来
                if(this.sum % 2){
                    this.sum = this.sum + this.n
                }

            },
            incrementWait(){
                setTimeout(()=>{
                    this.sum = this.sum + this.n
                },500)

            }


        }
    }
</script>

<style>
    button{
        margin-left:5px ;
    }

</style>