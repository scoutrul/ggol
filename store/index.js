export const state = () => ({
  user: {
    loggedIn: false,
    data: null
  }
})

export const actions = {
  async signUserIn({ commit }, { login, password }) {
    try {
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
    } catch (e) {
      alert(e)
    }
  },
  async authUserIn({ commit }, { email }) {
    await commit('SET_LOGGED_IN', !!email)
    await commit('SET_USER', { email })
  },
  async signUserOut({ commit }) {
    await this.$fireAuth.signOut().then(() => {
      commit('SET_USER', null)
      commit('SET_LOGGED_IN', false)
    })
  },
  async createUser({ dispatch }, { login, password }) {
    try {
      await this.$fireAuth
        .createUserWithEmailAndPassword(login, password)
        .then(() => {
          dispatch('signUserIn', { login, password })
        })
    } catch (e) {
      alert(e)
    }
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
