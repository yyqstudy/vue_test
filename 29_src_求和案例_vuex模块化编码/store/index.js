//该文件用于创建Vuex中最为核心的store
//引入Vue
import Vue from 'vue'

//引入Vuex
import Vuex from 'vuex'

//引入模块化
import countOptions from './count'
import personOptions from './person'

//使用插件，放在index.js
Vue.use(Vuex)



//求和相关的配置
//人员管理相关的配置


//准备actions——用于响应组件中的动作

//准备mutations——用于操作数据（state）
//准备state——用于存储数据


//准备getters——用于将state中的数据进行加工




//合并：创建并暴露store
export default new Vuex.Store({
    //模块化，开始分类
   modules:{
       countAbout:countOptions,
       personAbout:personOptions
   }
})
