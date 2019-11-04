export const state = () => ({
  user: {
    loggedIn: false,
    data: null
  }
})

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('authStateChange')
    await dispatch('fetchUserList')
  },

  async fetchUserList({ commit }) {
    await this.$fireStore
      .collection('users')
      .get()
      .then(function(querySnapshot) {
        const data = {}
        querySnapshot.forEach(function(doc) {
          data[doc.id] = doc.data()
        })
        commit('STORE_USER_LIST', data)
      })
  },
  async authStateChange({ dispatch }) {
    await this.$fireAuth.onAuthStateChanged(async (user) => {
      if (user && user.uid) {
        const uid = user.uid
        console.log('user in', user)
        await dispatch('authUserIn', { uid })
        dispatch('setUserOnline', { uid })
      } else {
        console.log('user is out')
      }
    })
  },
  setUserOnline(ctx, { uid, nickname = 'Anonim', email = '' }) {
    const ref = this.$fireDb.ref('usersOnline/' + uid)
    ref.set({
      online: true,
      nickname,
      email
    })
    ref.onDisconnect().remove()
  },
  async getUserInfo({ commit }, { uid }) {
    console.log(uid)
    try {
      const usersCollection = this.$fireStore.collection('users')

      await usersCollection
        .where('uid', '==', uid)
        .get()
        .then((docs) => {
          docs.forEach(async (doc) => {
            doc.exists
              ? await commit('SET_USER', doc.data())
              : console.log('No find document! ' + uid)
          })
        })
    } catch (e) {
      alert(e)
      console.log(e)
    }
  },
  async signUserIn({ commit, dispatch }, { login, password }) {
    try {
      await this.$fireAuth.signUserOut
      await this.$fireAuth
        .signInWithEmailAndPassword(login, password)
        .then(async (data) => {
          if (data) {
            const uid = data.user.uid

            dispatch('setUserOnline', { uid })

            await commit('SET_LOGGED_IN', true)
            await dispatch('getUserInfo', { uid })
          } else {
            commit('SET_LOGGED_IN', false)
            commit('SET_USER', null)
          }
        })
    } catch (e) {
      alert(e)
    }
  },
  async authUserIn({ commit, dispatch }, { uid }) {
    await commit('SET_LOGGED_IN', true)
    await dispatch('getUserInfo', { uid })
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
  async saveUserState({ commit }, { uid, login, password, nickname }) {
    const users = this.$fireStore.collection('users')
    const userState = {
      uid,
      login,
      password,
      nickname
    }
    try {
      await users.add(userState).then(async (ref) => {
        console.log('Added document with ID: ', ref.id)
        // await users.doc(ref.id).get().data().login
        await commit('SET_USER', userState)
      })
    } catch (e) {
      alert(e)
    }
  },
  async createUserAuth({ dispatch }, { login, password, nickname }) {
    try {
      await this.$fireAuth
        .createUserWithEmailAndPassword(login, password)
        .then(async (data) => {
          const uid = data.user.uid
          await dispatch('setUserOnline', { uid })
          await dispatch('saveUserState', {
            uid,
            login,
            password,
            nickname
          })
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
  },
  STORE_USER_LIST(state, data) {
    state.userList = data
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
