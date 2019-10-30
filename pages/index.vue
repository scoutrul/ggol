<template lang="pug">
  v-layout(column justify-center align-center)
    v-flex(xs12 sm8 md6)
      v-card
        v-card-title.headline Play your tourney!
        v-card-text
          p StarCraft
          p BroodWar
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      tourneys: []
    }
  },

  mounted() {
    // this.$fireAuth.signOut()
    // this.onAuthStateChanged()
    this.signInUser()
  },
  methods: {
    signInUser() {
      this.$store.dispatch('signUserIn', {
        login: 'antongolova@gmail.com',
        password: ''
      })
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  watch: {
    user(val) {
      console.log(val)
    }
  }
}
</script>
