import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken:localStorage.getItem('idToken') || null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.idToken,
      state.userId = userData.userId 
    },
    clearAuth(state){
      state.idToken = null,
      state.userId = null
    }
  },
  actions: {
    signup({commit}, authData) {
      Axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBtzpOWVgBehBQ-YEm-GhLiYVJ_NxvtplY', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(res => {
        commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
        })
        localStorage.setItem('token',res.data.idToken )
        localStorage.setItem('userId', res.data.localId)
        router.push('/Dashboard')
      })
      .catch(error => console.log(error))
    },
    login({commit}, authData) {
      return new Promise((resolve, reject) => {
        Axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBtzpOWVgBehBQ-YEm-GhLiYVJ_NxvtplY', {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          router.push('/Dashboard'),
          resolve(res)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
      }) 
     
    },
    logout({commit}) {
      commit('clearAuth')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      router.replace('/')
    },
    autoLogin({commit}) {
      const token = localStorage.getItem('token')
      if(!token) {
        return
      }
      const userId = localStorage.getItem('userId')
      // const token = localStorage.getItem('token')
      commit('authUser', {
        userId: userId,
        token: token
      })
    }
  },
 getters: {
   user(state) {
     return state.user
   },
    ifAuthenticated(state) {
      return state.idToken !== null
    }
 }
})
