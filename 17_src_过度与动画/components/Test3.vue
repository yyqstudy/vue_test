<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group
           appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"
        >
            <h1 v-show="!isShow" key="1">hello world</h1>
            <h1 v-show="isShow" key="2">transition-group多个元素需要过度</h1>
        </transition-group>


    </div>

</template>

<script>
    //引入第三方动画
    import 'animate.css'
    export default {
        name:'Test3',
        data(){
            return{
                isShow:true
            }
        }

    }
</script>

<style scoped>
    h1{
        background-color:darkorange;
        /*transition: 1s linear;*/
    }




</style>