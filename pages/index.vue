<template>
  <div class="container mainpage">
    <h1>Leagues</h1>
    <div v-for="league of leagues" :key="league.league_id">
      <CountryFlag :league_id="league.league_id" />
      <nuxt-link
        :to="{
          name: 'league',
          params: {
            id: league.league_id
          },
          path: `/leagues/${league.league_id}`
        }"
      >
        {{ league.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { CountryFlag } from '@/components/blocks'
export default {
  components: {
    CountryFlag
  },
  data: () => ({
    leagues: {}
  }),
  created() {
    // $api.getLeagues().then(() => {
    //   this.leagues = this.$store.state.leagues
    // })

  }
}
</script>

<style lang="stylus">
.mainpage {
  margin-top: 56px;
  color: #000;
}
</style>
