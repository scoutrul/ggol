<template lang="pug">
  v-flex(xs12 sm8 md6).ma-auto
    v-layout(v-if="!loggedIn")
      v-flex
        v-card( :loading="!mounted")
          v-card-title.headline Login
          v-card-text
            v-text-field(v-model="login" :rules="rulesLogin" placeholder="login(email)" :loading="!loggedIn")
            v-text-field(v-model="password" :rules="rulesPassword" placeholder="password" :loading="!loggedIn")
            v-btn(@click.prevent="signUserIn") SignIn
      v-flex(v-if="!loggedIn")
        RegisterForm
    v-card(v-else)
      v-card-title.headline Velkomen!
      v-card-title.headline {{JSON.stringify(user)}}
      v-card-text
        v-btn(@click.prevent="signUserOut") SignOut
</template>

<script>
import RegisterForm from '~/components/RegisterForm'
export default {
  components: { RegisterForm },
  data() {
    return {
      mounted: false,
      login: 'test@test.tt',
      password: 'testest',
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
    }
  }
}
</script>
