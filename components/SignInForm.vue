<template lang="pug">
  v-flex(xs12 sm8 md6).ma-auto
    v-card(v-if="!loggedIn" :loading="!mounted")
      v-card-title.headline Login
      v-card-text
        v-text-field(v-model="login" :rules="rulesLogin" placeholder="login(email)" :loading="!loggedIn")
        v-text-field(v-model="password" :rules="rulesPassword" placeholder="password" :loading="!loggedIn")
        v-btn(@click.prevent="signUserIn") SignIn
        v-btn(@click.prevent="createUser") createUser
    v-card(v-else)
      v-card-title.headline Velkomen!
      v-card-title.headline {{user && user.email}}
      v-card-text
        v-btn(@click.prevent="signUserOut") SignOut
</template>

<script>
export default {
  components: {},
  data() {
    return {
      mounted: false,
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

  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn
    },
    user() {
      return this.$store.getters.user
    }
  },
  mounted() {
    this.mounted = true
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
