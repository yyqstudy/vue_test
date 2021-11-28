<template>
    <div>
<!--        导航区-->
        <ul>
            <li v-for="m in messageList" :key="m.id">

                <!-- 跳转路由并携带params参数(不能用path写法只能用name写法，to的对象写法 -->
                <router-link :to="{
                    //有了名字，就不用写path
                    name:'xiangqing',
                    // path:'/home/message/detail',
                    params:{
                        id:m.id,
                        title:m.title
                    }
                }">
                    {{m.title}}
                </router-link>
                <button @click="pushShow(m)">push 查看</button>
                <button @click="replaceShow(m)">replace 查看</button>

            </li>
        </ul>
        <hr>
<!--        展示区：展示Detail.vue里面的信息-->
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name:'Message',
        data(){
            return{
                messageList:[
                    {id:'001',title:'消息001'},
                    {id:'002',title:'消息002'},
                    {id:'003',title:'消息003'},
                ]
            }
        },
        methods:{
            pushShow(m){
                //console.log(this.$router)//.$router里面的原型_proto_，里面的push
                this.$router.push({
                    name:'xiangqing',
                    // path:'/home/message/detail',
                    params: {
                        id: m.id,
                        title: m.title
                    }

                })
            },
            replaceShow(m){
                this.$router.replace({
                    name:'xiangqing',
                    // path:'/home/message/detail',
                    params: {
                        id: m.id,
                        title: m.title
                    }

                })

            }
        },
        beforeDestroy() {
            console.log('Message组件即将被销毁')
        }
    }

</script>

<style>

</style>