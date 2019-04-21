<template>
  <img v-if="resolved" :src="countryFlagSrc" height="14px" :alt="countryName" />
</template>

<script>
import api from '@/services/'

export default {
  name: 'Flag',
  props: ['leagueId'],
  data: () => ({
    resolved: false,
    countryFlagSrc: null,
    countryName: ''
  }),

  mounted() {
    this.leagueId && this.getCountryFlag(this.leagueId)
  },
  methods: {
    getCountryFlag() {
      api
        .getLeague()
        .then(() => {
          this.countryFlagSrc = this.$store.state.leagues[this.leagueId].flag
          this.countryName = this.$store.state.leagues[this.leagueId].country
          this.resolved = true
        })
        .catch(reason => {
          console.log(reason)
        })
    }
  }
}
</script>
<style></style>
