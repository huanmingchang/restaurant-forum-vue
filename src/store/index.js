import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false,
    },
    isAuthenticated: false,
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser,
      }

      state.isAuthenticated = true
    },
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()
        const { id, email, name, image, isAdmin } = data

        commit('setCurrentUser', {
          id,
          email,
          name,
          image,
          isAdmin,
        })
      } catch (error) {
        console.error(error.message)
      }
    },
  },
  modules: {},
})
