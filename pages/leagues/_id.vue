<template>
  <v-layout v-if="resolved" class="container">
    <h1>League {{ league.name }}</h1>
    <LeagueInfo :data="league" />
    <hr />
    <v-layout>
      <v-flex xs1>`</v-flex>
      <v-flex xs2> Команда</v-flex>
      <v-flex xs1> Очки</v-flex>
      <v-flex xs1> Позиция</v-flex>
    </v-layout>
    <v-layout v-for="(team, i) in table" :key="team.team_id + i">
      <v-flex xs1>
        <TeamLogo
          :team_id="team.team_id"
          :size="28"
          :class-name="'league__team--logo'"
        />
      </v-flex>
      <v-flex xs2>
        <nuxt-link
          :to="{
            params: { id: team.team_id },
            path: `/team/${team.team_id}`
          }"
        >
          {{ team.teamName }}
        </nuxt-link>
      </v-flex>
      <v-flex xs1> {{ team.points }}</v-flex>
      <v-flex xs1> {{ team.rank }}</v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import api from '@/plugins/api'
import { TeamLogo, LeagueInfo } from '@/components/blocks'

export default {
  components: {
    TeamLogo,
    LeagueInfo
  },
  data: () => ({
    table: [],
    league: {},
    leagueId: 0,
    resolved: false
  }),
  async asyncData ({ store, route }) {
    const leagueId = route.params.id

    await api.getLeague(store, leagueId)
    await api.getLeagueTable(store, leagueId)
    await api.getLeague(store, leagueId).then(async()=>{
      for(const team in store.state.leagueTables[leagueId]){
        await api.getTeam(store, team.team_id)
      }
    })
    return {
      table: store.state.leagueTables[leagueId],
      league: store.state.leagues[leagueId],
      leagueId,
      resolved: store.state.leagueTables[leagueId] &&
        store.state.leagues[leagueId]
    }
  },

}
</script>
<style>
.league__team--logo {
  transform: translateX(-50%);
  margin-left: 28px;
}
</style>
