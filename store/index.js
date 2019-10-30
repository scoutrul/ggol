export const state = () => ({
  user: {
    loggedIn: false,
    data: null
  }
})

export const actions = {
  async startSession(ctx, { uid }) {
    await this.$fireDb.ref('.info/connected').on('value', async (snap) => {
      if (snap.val() === true) {
        await this.$fireStore
          .collection('users')
          .doc(uid)
          .set(
            {
              online: true
            },
            { merge: true }
          )
        alert('connected')
      } else {
        await this.$fireStore
          .collection('users')
          .doc(uid)
          .set(
            {
              online: false
            },
            { merge: true }
          )
        alert('not connected')
      }
    })
  },
  async setUserOnline(ctx, { uid }) {
    await this.$fireStore
      .collection('users')
      .doc(uid)
      .set(
        {
          online: true
        },
        { merge: true }
      )
  },
  async signUserIn({ commit, dispatch }, { login, password }) {
    try {
      await this.$fireAuth.signUserOut
      await this.$fireAuth
        .signInWithEmailAndPassword(login, password)
        .then(async (data) => {
          if (data) {
            await dispatch('setUserOnline', { uid: data.user.uid })
            commit('SET_LOGGED_IN', true)
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
    await commit('SET_LOGGED_IN', true)
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
