<template lang="pug">
  v-flex(xs12 sm8 md6).ma-auto
    v-card( :loading="!mounted")
      v-card-title.headline Register
      v-card-text
        v-text-field(v-model="login" :rules="rulesLogin" placeholder="login(email)")
        v-text-field(v-model="password" :rules="rulesPassword" placeholder="password")
        v-text-field(v-model="nickname" placeholder="nickname" )
        v-btn(@click.prevent="createUser") createUser
</template>

<script>
export default {
  components: {},
  data() {
    return {
      mounted: false,
      login: 'test@test.tt',
      password: 'testest',
      nickname: 'anonim',
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

  computed: {},
  mounted() {
    this.mounted = true
  },
  methods: {
    async createUser() {
      await this.$store.dispatch('createUser', {
        login: this.login,
        password: this.password,
        nickname: this.nickname
      })
    }
  }
}
</script>
