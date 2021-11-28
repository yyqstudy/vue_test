//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//引入vuex,放在index.js，不在这里
//import Vuex from 'vuex'

//引入store
import store from './store'




//关闭Vue的生产提示
Vue.config.productionTip = false

//使用插件，放在index.js，不在这里使用
// Vue.use(Vuex)





//创建vm
new Vue({
    el:'#app',
    render: h=>h(App),
    store,
    //全局事件总线
    beforeCreate(){
        Vue.prototype.$bus = this
    }

})
//vue components看得见store
// console.log(vm)