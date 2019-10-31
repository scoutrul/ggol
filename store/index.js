export const state = () => ({
  user: {
    loggedIn: false,
    data: null
  }
})

export const actions = {
  async authStateChange({ dispatch }) {
    await this.$fireAuth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log('user in')
        console.log(user)
        await dispatch('authUserIn', user)
        dispatch('setUserOnline', { uid: user.uid })
      } else {
        console.log(user)
        console.log('user is out')
      }
    })
  },
  setUserOnline(ctx, { uid }) {
    const ref = this.$fireDb.ref('usersOnline/' + uid)
    ref.set({
      online: true
    })
    ref.onDisconnect().remove()
  },
  async signUserIn({ commit, dispatch }, { login, password }) {
    try {
      await this.$fireAuth.signUserOut
      await this.$fireAuth
        .signInWithEmailAndPassword(login, password)
        .then(async (data) => {
          if (data) {
            dispatch('setUserOnline', { uid: data.user.uid })
            await commit('SET_LOGGED_IN', true)
            await commit('SET_USER', {
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
    await commit('SET_LOGGED_IN', true)
    await commit('SET_USER', { email })
  },
  async signUserOut({ commit }) {
    try {
      const user = await this.$fireAuth.currentUser
      const ref = await this.$fireDb.ref('usersOnline/' + user.uid)
      ref.remove()
    } catch (e) {
      alert(e)
    }
    await this.$fireAuth.signOut().then(() => {
      commit('SET_USER', null)
      commit('SET_LOGGED_IN', false)
    })
  },
  async createUser({ dispatch }, { login, password }) {
    try {
      await this.$fireAuth
        .createUserWithEmailAndPassword(login, password)
        .then(async (data) => {
          await dispatch('setUserOnline', { uid: data.user.uid })
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
