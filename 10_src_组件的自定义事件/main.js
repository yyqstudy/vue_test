//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'



//关闭Vue的生产提示
Vue.config.productionTip = false




//创建vm
new Vue({
    el:'#app',
    render: h=>h(App),
    //3秒后销毁vm
    /*mounted() {
        setTimeout(()=>{
            this.$destroy() //this 指 vm
        },3000)
    }*/
})