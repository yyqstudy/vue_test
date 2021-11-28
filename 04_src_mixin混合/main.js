//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//全局混合
//import {a,aa} from '../mixin'

//关闭Vue的生产提示
Vue.config.productionTip = false

//全局混合
// Vue.mixin(a)
// Vue.mixin(aa)
//创建vm
new Vue({
    el:'#app',
    render: h=>h(App)
})