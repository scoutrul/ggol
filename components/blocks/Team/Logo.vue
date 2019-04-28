<template>
  <v-flex :style="{ minHeight: size ? `${size}px` : '60px' }">

  </v-flex>
</template>

<script>
import api from '@/plugins/api'

export default {
  props: ['team_id', 'size', 'className'],
  data: () => ({
     resolved: false
  }),
  async asyncData(){
    return {
      team: {
        logo: '',
        name: '',
      },
      resolved: true
    }
  },
  created(){
    // api.getTeam(this.team_id).then(() => {
    // console.log(this.$store.state.teams[this.team_id])
    // console.log(this.team_id)
    // this.resolved = true
  }
}
</script>
<style></style>
