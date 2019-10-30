<template lang="pug">
  v-app(dark)
    v-navigation-drawer(v-model='drawer' :mini-variant='miniVariant' clipped fixed app v-if="this.$store.getters.loggedIn")
      v-list
        v-list-item(v-for='(item, i) in items' :key='i' :to='item.to' router exact)
          v-list-item-action
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title(v-text='item.title').
    v-content.flex.align-center
      v-container
        nuxt
    v-footer(app dark padless)
      v-flex.xs6
        v-btn.my-2(v-for='link in links' :key='link' color='grey' text rounded) {{ link }}
      v-flex.xs4.text-right.pa-4
        v-btn(icon)
          v-icon mdi-magnify
        v-btn(icon)
          v-icon mdi-heart
      v-flex.xs2.text-right.pa-4
        |{{ new Date().getFullYear() }} — Ggol
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      miniVariant: false,
      items: [
        {
          title: 'Профиль',
          to: '/profile',
          icon: 'mdi-account'
        },
        {
          title: 'История',
          to: '/history',
          icon: 'mdi-history'
        },
        {
          title: 'Задонатить',
          to: '/donate',
          icon: 'mdi-gift'
        }
      ],
      links: ['@', 'About', 'Donate']
    }
  }
}
</script>
