// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News"
import Message from "../pages/Message"
import Detail from "../pages/Detail"

//创建并暴露一个路由器
const router = new VueRouter({
    //路由规则
    routes:[
        {
            //给路由命名
              name:'guanyu',
              path:'/about',
             component:About
        },
        {
            path:'/home',
            component:Home,
            //子路由（二级路由）
            //http://localhost:8080/#/home/news
            //http://localhost:8080/#/home/message
            children:[
                {
                    //这里不用写‘/’，vue帮你配好
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children:[
                        {
                            name:'xiangqing',
                            //使用占位符声明接收params参数
                            //占位符，声明 Message.vue里面:to="`/home/message/detail/666/hello`"哪个是id，哪个是title
                            path: 'detail/:id/:title',
                            component: Detail,
                        }
                    ]
                 }
                 ]
        }
    ]
})

export default router