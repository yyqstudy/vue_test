<template>
    <div>

        <h1>人员列表</h1>
        <h3 style="color: hotpink">Count组件求和为:{{sum}}</h3>
        <h3>列表中第一个人的名字:{{firstPersonName}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的人</button>
        <button @click="addPersonServer">添加一个随机语句</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>

        </ul>
    </div>

</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name:'Person',
        data(){
            return{
                name:''
            }
        },
        //模块化
        computed:{
            personList(){
                return this.$store.state.personAbout.personList
            },
            sum(){
                return this.$store.state.countAbout.sum
            },
            firstPersonName(){
                return this.$store.getters['personAbout/firstPersonName']
            }
        },
        methods:{
            add(){
                //personObj变量用来装人员的姓名和id
              const personObj = {id:nanoid(),name:this.name}
              //console.log(personObj)
                //哪一个里面的mutations对应$store.commit（看图）
                this.$store.commit('personAbout/ADD_PERSON',personObj)
                this.name='' //输入名字后，清空输入框
            },
            addWang(){
                //personObj变量用来装人员的姓名和id
                const personObj = {id:nanoid(),name:this.name}
                //$store.dispatch对应actions（看图）
                this.$store.dispatch('personAbout/addPersonWang',personObj)
                this.name=''

            },
            //对应actions（看图）
            addPersonServer(){
                this.$store.dispatch('personAbout/addPersonServer')
            }
        },
        mounted() {
            console.log(this.$store)
        }

    }

</script>

<style>

</style>