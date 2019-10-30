<template lang="pug">
  v-layout(column justify-center align-center)
    v-flex(xs12 sm8 md6)
      v-card(v-if="!loggedIn")
        v-card-title.headline Login
        v-card-text
          v-text-field(v-model="login" :rules="rulesLogin" placeholder="login(email)" :loading="!loggedIn")
          v-text-field(v-model="password" :rules="rulesPassword" placeholder="password" :loading="!loggedIn")
          v-btn(@click.prevent="signUserIn") SignIn
          v-btn(@click.prevent="createUser") createUser
      v-card(v-else)
        v-card-title.headline Velkomen!
        v-card-title.headline {{user.email}}
        v-card-text
          v-btn(@click.prevent="signUserOut") SignOut
</template>

<script>
export default {
  components: {},
  data() {
    return {
      login: 'test@test.tt',
      password: 'testest',
      tourneys: [],
      rulesLogin: [
        (value) => !!value || 'Required.',
        (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      ],
      rulesPassword: [(value) => !!value || 'Required.']
    }
  },

  async nuxtServerInit({ commit, app }) {
    const user = await app.$fireAuth.currentUser
    console.log(user)
    commit('SET_USER', {
      displayName: user.displayName,
      email: user.email
    })
  },
  mounted() {
    this.$fireAuth.onAuthStateChanged((user) => {
      if (user) {
        console.log('user is out')
      } else {
        console.log('user in')
      }
    })
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn
    },
    user() {
      return this.$store.getters.user
    }
  },
  methods: {
    async signUserIn() {
      await this.$store.dispatch('signUserIn', {
        login: this.login,
        password: this.password
      })
    },
    async signUserOut() {
      await this.$store.dispatch('signUserOut')
    },
    async createUser() {
      await this.$store.dispatch('createUser', {
        login: this.login,
        password: this.password
      })
    }
  }
}
</script>
