<template>
    <div>
        <!--        导航区-->
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                  <!--       这里的有写清楚路径：to="/home/news"-->
                    <router-link class="list-group-item " active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link class="list-group-item " active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
<!-- 展示区       -->
<!--            keep-alive 缓存  include="News" News是组件名！！！-->
            <keep-alive include="News">
               <router-view></router-view>
            </keep-alive>
        </div>
    </div>

</template>

<script>


    export default {
        name:'Home',
        /*beforeDestroy() {
            console.log('Home组件即将被销毁')
        },
        mounted() {
            console.log('Home组件挂载完毕',this)//出现了`$route，$router
            //验证Home组件和About组件的$route和$router是不是一样
            window.homeRoute = this.$route //把About组件身上$route放在window的aboutRoute里面
            window.homeRouter = this.$router
        }
*/

    }
</script>
