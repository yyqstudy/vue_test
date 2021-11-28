<template>
    <div >

        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>地址:{{address}}</h2>

    </div>
</template>

<script>
    //引入一个混合mixin
    import {a,aa} from '../mixin'
    export default {
        name:'School',

        data(){
            return{
                name:'scut',
                address:'广州',
                x:666 //优先级高于mixin.js
            }
        },
        //局部混合
        mixins:[a,aa]
        //写在mixin.js里面
       /* methods:{
            showName(){
                alert(this.name)
            }
        },*/

    }
</script>

