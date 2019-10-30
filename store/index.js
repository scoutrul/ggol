export const state = () => ({
  user: {
    loggedIn: false,
    data: null
  }
})

export const actions = {
  async signUserIn({ commit }, { login, password }) {
    await this.$fireAuth
      .signInWithEmailAndPassword(login, password)
      .then((data) => {
        if (data) {
          commit('SET_LOGGED_IN', !!data)
          commit('SET_USER', {
            email: data.user.email
          })
        } else {
          commit('SET_LOGGED_IN', false)
          commit('SET_USER', null)
        }
      })
  },
  async signUserOut({ commit }) {
    await this.$fireAuth.signOut().then(() => {
      commit('SET_USER', null)
      commit('SET_LOGGED_IN', false)
    })
  }
}
export const mutations = {
  SET_LOGGED_IN(state, value) {
    state.user.loggedIn = value
  },
  SET_USER(state, data) {
    state.user.data = data
  }
}
export const getters = {
  user(state) {
    return state.user.data
  },
  loggedIn(state) {
    return state.user.loggedIn
  }
}
