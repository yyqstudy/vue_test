<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord"/>
            <button @click="searchUsers">Search</button>

        </div>
    </section>

</template>

<script>
    //引入axios发送请求
    import axios from 'axios'
    export default {
        name:'Search',
        data(){
            return{
                keyWord:''
            }
        },
        methods:{
            searchUsers(){
                //请求前更新List的数据
                this.$bus.$emit('updateListData',{isFirst:false,isLoading:true, errMsg:'', users:[]})
                axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    response => {
                        //console看到response.data，发现需要的是里面的items
                        // console.log('请求成功！',response.data)
                        // console.log('请求成功！',response.data.items)
                       // this.$bus.$emit('getUsers',response.data.items)
                        //请求成功后更新List的数据
                        //isFirst之后都是默认为false，就省略不写
                        this.$bus.$emit('updateListData',{isLoading:false, errMsg:'', users:response.data.items})
                    },
                    error => {
                        console.log('请求失败！',error.message)
                        //请求失败后更新List的数据
                        this.$bus.$emit('updateListData',{isLoading:false, errMsg:error.message, users:[]})
                    }
                )
            }
        },


    }
</script>

