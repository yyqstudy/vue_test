//该文件用于创建Vuex中最为核心的store
//引入Vue
import Vue from 'vue'

//引入Vuex
import Vuex from 'vuex'

//使用插件，放在index.js
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
    //加法

    //减法
    jian:function (context,value) {
        console.log(' actions==>mine')
        context.commit('JIAN',value)
    },
    //
    jiaOdd(context,value) {
        console.log(' actions==>addOdd')
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context,value){
        setTimeout(()=>{
            console.log(' actions==>addWait')
            context.commit('JIA', value)
        },500)

    }

}

//准备mutations——用于操作数据（state）

const mutations = {
    //一般大写
    JIA(state,value){
      console.log('mutations==>add',state,value)
        state.sum += value
    },

    //
    JIAN(state,value){
        console.log('mutations==>mine')
        state.sum -= value
    },
}

//准备state——用于存储数据
const state = {
    sum:0,
    school:'MIT',
    subject:'computer science'
}

//准备getters——用于将state中的数据进行加工
//配置到store
const getters ={
    bigSum(state){
         return state.sum*10
    }
}



//创建store
const store = new Vuex.Store({
    //key和value重名可以简写为  actions,
    actions,
    mutations:mutations,
    state:state,
    getters,
})

//暴露store
export default store

//合并：创建并暴露store
/*
export default new Vuex.Store({
    actions,
    mutations,
    state,
})*/
