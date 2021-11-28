<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group name="hello" appear>
            <h1 v-show="!isShow" key="1">hello world</h1>
            <h1 v-show="isShow" key="2">transition-group多个元素需要过度</h1>
        </transition-group>

<!--        另外一种写法-->
<!--        <div  v-show="isShow">-->
<!--            <h1>hello world</h1>-->
<!--            <h1>transition-group多个元素需要过度</h1>-->
<!--        </div>-->

    </div>

</template>

<script>
    export default {
        name:'Test2',
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


    /*因为上面配置了name="hello"*/
    /*进入的起点 离开的终点*/
    .hello-enter,.hello-leave-to{
       transform: translateX(-100%);

    }
    /*进入的终点,离开的起点*/
    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }

    .hello-enter-active, .hello-leave-active{
        transition: 1s linear;
    }

  /*  !*离开的起点*!
    .hello-leave{
        transform: translateX(0);

    }
    !*离开的终点*!
    .hello-leave-to{
        transform: translateX(-100%);
    }
*/




</style>