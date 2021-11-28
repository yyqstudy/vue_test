<template>
    <div class="school">

        <h2 >学校名称：{{name }}</h2>
        <h2 >地址:{{address}}</h2>
        <button @click="sendSchoolName">把学校名给App组件</button>



    </div>
</template>

<script>


    export default {
        name:'School',
        props:['getSchoolName'],
        data(){
            return{
                name:'scut',
                address:'广州',

            }
        },
        methods:{
            sendSchoolName(){
                this.getSchoolName(this.name)
            }
        }



    }
</script>

<!-- scoped 避免样式名相同冲突-->
<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>

