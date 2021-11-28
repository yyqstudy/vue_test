<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <button @click="back">后退</button>
        <button  @click="forward">前进</button>
        <button  @click="test">测试一下go</button>
    </div>
</template>

<script>
    export default {
        name:'Banner',
        methods:{
            back(){
                //console.log(this.$router)//$router里面的原型_proto_，里面的back()
                 this.$router.back()
            },
            forward(){
                this.$router.forward()
            },
            test(){
                this.$router.go(3)//正数：前进3步；负数：后退XX步
            }
        }

    }
</script>

<style>

</style>