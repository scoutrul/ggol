export default {
  state: {
    user: {
      loggedIn: false,
      data: null
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value
    },
    SET_USER(state, data) {
      state.user.data = data
    }
  },
  actions: {
    // async nuxtServerInit({ commit }) {
    //   await this.$fireAuth.onAuthStateChanged(function(user) {
    //     if (user) {
    //       commit('SET_USER', {
    //         displayName: user.displayName,
    //         email: user.email
    //       })
    //     } else {
    //       commit('SET_USER', null)
    //     }
    //   })
    // },
    signUserIn({ commit }, { login, password }) {
      this.$fireAuth
        .signInWithEmailAndPassword(login, password)
        .then((user) => {
          commit('SET_LOGGED_IN', !!user)
          if (user) {
            commit('SET_USER', {
              displayName: user.displayName,
              email: user.email
            })
          } else {
            commit('SET_USER', null)
          }
        })
    }
  }
}
