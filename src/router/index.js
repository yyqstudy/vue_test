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
            name:'zhuye',
            path:'/home',
            component:Home,
            //子路由（二级路由）
            //http://localhost:8080/#/home/news
            //http://localhost:8080/#/home/message
            children:[
                {
                    //这里不用写‘/’，vue帮你配好
                    name:'xinwen',
                    path: 'news',
                    component: News,
                },
                {
                    name:'xiaoxi',
                    path: 'message',
                    component: Message,
                    children:[
                        {
                            name:'xiangqing',
                            //使用占位符声明接收params参数
                            //占位符，声明 Message.vue里面:to="`/home/message/detail/666/hello`"哪个是id，哪个是title
                            path: 'detail/:id/:title',
                            component: Detail,

                            //---------------------------
                            //谁接收参数，就把props配置写在谁身上
                            //第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
                            //  props:{a:404,b:'hey'}

                            //第二种写法（query传参时候不能用）：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
                            //props:true

                            //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
                            props($route){
                                return{
                                    //id:'666',
                                    //title:'hello'
                                    id:$route.params.id,
                                    title:$route.params.title

                                }
                            }

                            //解构赋值写法，效果一样

                            /*props({params:{id,title}}){
                                return {id,title}
                            }*/


                        }
                    ]
                 }
                 ]
        }
    ]
})


//全局前置路由守卫：初始化时执行、每次路由切换前执行
//每一次路由切换之前,调用函数,next:放行
router.beforeEach((to,from,next)=>{
   console.log(to,from)
    //next() //放行，不然没内容出来


    //只有学校是MIT，才能看到Message组件和News组件的内容
    if(to.name==='xinwen' || to.path==='/home/message'){
        if(localStorage.getItem('school')==='MIT'){
            next()
        }else{
            alert('该学校无权限查看')
        }
    }else{
        next()
    }


})

export default router