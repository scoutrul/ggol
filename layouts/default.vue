<template>
  <v-app dark>
    <v-toolbar :clipped-left="true" fixed app>
      <v-toolbar-title v-text="title" />
        <LogoHeader />
        <Menu />
      <v-spacer />
    </v-toolbar>

    <Main>
      <Body>
        <v-fade-transition mode="out-in">
          <router-view />
        </v-fade-transition>
      </Body>
    </Main>

    <v-footer :fixed="fixed" app>
      <span>&copy; GGol.ru 2019</span>
    </v-footer>
  </v-app>
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

<style lang="stylus">
@import '~@/assets/styles/index.styl';
</style>
