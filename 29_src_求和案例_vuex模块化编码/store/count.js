//求和相关的配置
const countOptions = {
    //开启命名空间后
    namespaced:true,
    actions:{
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
    },
    mutations:{
        //加法
        JIA(state,value){
            console.log('mutations==>add',state,value)
            state.sum += value
        },

        //减法
        JIAN(state,value){
            console.log('mutations==>mine')
            state.sum -= value
        },
    },
    state:{
        sum:0,
        school:'MIT',
        subject:'computer science',
    },
    getters:{
        //state是指上面的state，不是总的state
        bigSum(state){
            return state.sum*10
        }
    },
}

export default countOptions