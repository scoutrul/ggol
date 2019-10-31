<template lang="pug">
  v-layout(column justify-center align-center)
    v-flex(style="width: 100%")
      SignInForm
    v-flex(style="width: 100%")
      Brackets(:bracket-size="16")
</template>

<script>
import Brackets from '~/components/Brackets'
import SignInForm from '~/components/SignInForm'
export default {
  components: { SignInForm, Brackets },
  data() {
    return {}
  },

  async beforeCreate() {
    await this.$store.dispatch('authStateChange')
  }
}
</script>
