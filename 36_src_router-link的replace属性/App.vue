<template>
    <div>
        <div class="row">
           <banner/>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!-- 原始html中我们使用a标签实现页面的跳转 -->
<!--                    <a class="list-group-item" href="./about.html">About</a>-->
<!--                    <a class="list-group-item active" href="./home.html">Home</a>-->

                    <!-- Vue中借助router-link标签实现路由的切换  active-class点击时候会高亮-->
<!--                    <router-link class="list-group-item" active-class="active" to="/about">About</router-link>-->
<!--                    命名路由-->

<!--     开启 <router-link>的replace属性               -->
                    <router-link :replace="true" class="list-group-item" active-class="active" :to="{name:'guanyu'}">About</router-link>
                     <router-link  replace class="list-group-item " active-class="active" to="/home">Home</router-link>


                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <!-- 指定组件的呈现位置 -->
                         <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    //引入组件
    import Banner from './components/Banner'

    export default {
        name:'App',
        components: {Banner},
        mounted() {
            //vue components看得见store,控制台出现$store
            //console.log('App',this)
        }

    }
</script>





