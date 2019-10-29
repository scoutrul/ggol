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

  created() {
    this.readFromFirestore()
  },
  methods: {
    async readFromFirestore() {
      const messageRef = this.$fireStore.collection('tourneys').doc('1')
      try {
        const messageDoc = await messageRef.get()
        console.log(messageDoc.data().name)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
