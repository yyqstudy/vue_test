// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News"
import Message from "../pages/Message"

//创建并暴露一个路由器
const router = new VueRouter({
    //路由规则
    routes:[
        {
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
                 }
                 ]
        }
    ]
})

export default router