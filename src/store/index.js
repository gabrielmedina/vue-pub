import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    alert: {
      isVisible: false,
      status: '',
      message: ''
    }
  },

  mutations: {
    SET_ALERT (state, payload) {
      state.alert = payload
    }
  },

  actions: {
    updateAlert ({commit}, payload) {
      const alert = { ...payload }

      commit('SET_ALERT', alert)
    }
  },

  getters: {
    getAlert (state) {
      return state.alert
    }
  }
})

export default store
