//人员管理相关的配置
import axios from 'axios'
import {nanoid} from "nanoid";
const personOptions = {
    //开启命名空间后
    namespaced:true,
    actions:{
        //这里的value是Person.vue里面的personObj
        addPersonWang(context,value){
            //姓氏是王的，才能加上去
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须姓王')
            }

        },
        //练习Backend API
        //value不用写，直接让服务器发过来，用axios
        addPersonServer(context){
             axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                 response =>{
                       context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                 },
                 error =>{
                    alert(error.message)
                 }
             )
        }
    },
    mutations:{
        //添加人员
        ADD_PERSON(state,value){
            console.log('mutations==>添加人员')
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001',name:'alex'}
        ]
    },
    getters:{
        //获取列表中第一个人的名字
        firstPersonName(state){
            console.log('获取列表中第一个人的名字')
            return state.personList[0].name
        }

    },
}

export default personOptions