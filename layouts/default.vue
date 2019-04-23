<template lang="pug">
  v-app(dark)
    v-toolbar(:clipped-left="true" fixed app)
      v-toolbar-title(v-text="title")
        LogoHeader
        Menu
      v-spacer
    Main
      Body
        v-fade-transition(mode="out-in")
          nuxt
    v-footer(:fixed="fixed" app)
      span &copy; GGol.ru 2019
</template>

<script>
import { Main, Body } from '~/components/layout'
import { LogoHeader, Menu } from '~/components/blocks'

export default {
  components: {
    Main,
    Body,
    Menu,
    LogoHeader
  },
  data() {
    return {
      fixed: false,
      title: 'GGol.ru'
    }
  }
}
</script>

<style lang="styl" scoped>
@import '../assets/styles/base/main.styl';
@import '../assets/styles/base/header.styl';
@import '../assets/styles/base/footer.styl';
</style>
