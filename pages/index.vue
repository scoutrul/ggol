<template lang="pug">
  v-layout(column justify-center align-center)
      SignInForm
</template>

<script>
import SignInForm from '~/components/SignInForm'
export default {
  components: { SignInForm },
  data() {
    return {}
  },

  async beforeCreate() {
    await this.$store.dispatch('authStateChange')
  }
}
</script>
