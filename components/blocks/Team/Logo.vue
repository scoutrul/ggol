<template>
  <v-flex :style="{ minHeight: size ? `${size}px` : '60px' }" v-if="resolved">
    <v-img
      :max-height="size ? size : 60"
      contain
      :class="`${className && className}`"
      :src="team.logo"
      :alt="team.name"
      :title="team.name"
      :height="size ? size : 60"
      :lazy-src="'http://clipart-library.com/image_gallery/348752.gif'",
    />
  </v-flex>
</template>

<script>
import api from '@/plugins/api'

export default {
  props: ['team_id', 'size', 'className'],
  data: () => ({
    team: {},
    resolved: false
  }),

  created() {
    api.getTeam(this.team_id).then(() => {
      this.team = this.$store.state.teams[this.team_id]
      this.resolved = true
    })
  },
}
</script>
<style></style>
