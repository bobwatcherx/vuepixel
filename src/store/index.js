import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	allpost:[],
    testpost:[]
  },
  mutations: {
  	tambahapi(state,payload){
  		return state.allpost.push(payload)
  	},
    tambahstatebaru(state,payload){
      return  state.allpost.push(payload)
    },
    deletestate(state,item){
     return state.allpost.splice(state.allpost.indexOf(item),1)
    },
   editremove(state,payload){
     return state.allpost.splice(state.allpost.indexOf(payload),1)
   },
    editadd(state,payload){
      return  state.allpost.push(payload)
    },
  },
  actions: {
     updatestate({commit},payload){
       commit('editremove',payload)
     },
     updateadd({commit},payload){
       commit('editadd',payload)
     }
  },
  getters:{
  	viewpost(state){
  		return state.allpost;
  	}
  },
  modules: {
  }
})
