import Vue from 'vue'
import Vuex from 'vuex'

//挂载vuex
Vue.use(Vuex)

//创建Vuex对象
const store = new Vuex.Store({
    // plugins: [persistedState()],
    state: {
    
    },
    mutations: {
        saveUserInfo(state,val){
            state.openid = val
        },
    },
    actions: {
        SAVEUSERACTION(context,payload){
            return new Promise((res,rej) => {
                context.commit('saveUserInfo',payload)
                res()
            })
        },
    }
})

export default store