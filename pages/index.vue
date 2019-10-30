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
    await this.$fireAuth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log('user in')
        console.log(user)
        await this.$store.dispatch('authUserIn', user)
        await this.$store.dispatch('startSession', { uid: user.uid })
      } else {
        console.log(user)
        console.log('user is out')
      }
    })
  }
}
</script>
