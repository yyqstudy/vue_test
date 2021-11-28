<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hello" appear>
            <h1 v-show="isShow" >hello world</h1>
        </transition>
<!--        <h1 v-show="isShow" class="come">hello world</h1>-->
    </div>

</template>

<script>
    export default {
        name:'Test',
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
    }

    /*定义动画样式类名，以便使用*/

    /*因为上面配置了name="hello"*/
    .hello-enter-active{
        /*linear 匀速*/
        animation: comeAndLeave 1s linear;
    }
    .hello-leave-active{
        animation: comeAndLeave 1s linear reverse;
    }

    /*原始写法*/
    /*.v-enter-active{
        !*linear 匀速*!
        animation: comeAndLeave 1s linear;
    }
    .v-leave-active{
        animation: comeAndLeave 1s linear reverse;
    }*/



    /*动画样式：出现的动画*/
    @keyframes comeAndLeave {
        from{
            /*从左边进来*/
            transform: translate(-100%);
        }
        to{
            transform: translate(0px);
        }
    }

</style>