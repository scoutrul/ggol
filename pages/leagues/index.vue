<template>
  <div class="container">
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
import api from '@/plugins/api'
export default {
  head: {
    title: 'GGOL.RU'
  },
  components: {
    CountryFlag
  },
  data: () => ({
    leagues: {}
  }),
  async asyncData ({ store, params }) {
     await api.getLeagues(store)
     return {
        leagues: store.state.leagues
      }
  }
}
</script>

<style lang="stylus">

</style>
