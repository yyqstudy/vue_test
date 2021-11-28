//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'



//关闭Vue的生产提示
Vue.config.productionTip = false

// Vue.prototype.x={a:1,b:2}
// console.log(Vue.prototype) //为什么this能调用$on,$off,$emit? 因为$on,$off,$emit在Vue原型上

//第一种：用一个API作为组件标签
/*const demo = Vue.extend({})
const d =new demo()
//d是vuecomponent的实例对象,此时的d能调用$on,$off,$emit
Vue.prototype.x = d */

//创建vm
new Vue({
    el:'#app',
    render: h=>h(App),
    //第二种: beforeCreate()
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    }

})