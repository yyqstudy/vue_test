<template>
    <div >

        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>

    </div>
</template>

<script>
    //引入一个混合mixin
    import {a,aa} from '../mixin'
    export default {
        name:'Student',

        data(){
            return{
                name:'alex',
                sex:'male',
            }
        },
        mixins:[a,aa]

    //写在mixin.js里面
       /* methods:{
            showName(){
                alert(this.name)
            }
        },*/

    }
</script>

