<template>
    <div>
        <button @click="getStudent">获取学生信息</button>
        <button @click="getCar">获取汽车信息</button>

    </div>


</template>

<script>

    import axios from 'axios'
    export default {
        name:'App',
        methods:{
            getStudent(){

                //服务器： http://localhost:5000/students
                //加上请求前缀,
                axios.get(' http://localhost:8080/api/students').then(

                    response => {
                        //response 是对象，response.data才是服务器传送的数据
                        console.log('请求成功！',response.data)
                    },
                    error =>{
                        //error 是对象，error.message是失败的原因
                        console.log('请求失败！',error.message)
                }
                )
            },
            getCar(){
                //服务器：http://localhost:5001/cars
                //加上请求前缀,
                axios.get(' http://localhost:8080/demo/cars').then(

                    response => {
                        //response 是对象，response.data才是服务器传送的数据
                        console.log('请求成功！',response.data)
                    },
                    error =>{
                        //error 是对象，error.message是失败的原因
                        console.log('请求失败！',error.message)
                    }
                )
            },


        }

    }
</script>





