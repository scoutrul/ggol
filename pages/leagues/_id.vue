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
  async asyncData ({ store, route, app }) {
    const leagueId = route.params.id
    const league = await api.getLeague(store, leagueId).then(() => {
      return store.state.leagues[leagueId]
    });
    const table = await api.getLeagueTable(store, leagueId).then(table => {
      for(const team of table){
        api.getTeam(store, team.team_id)
      }
      return table
    })
    return {
      table,
      league,
      leagueId,
      resolved: (store.state.leagueTables[leagueId] && store.state.leagues[leagueId]),
      teams: store.teams
    }

    // api.getLeague(store, leagueId).then(() => {
    //   api.getLeagueTable(store, leagueId).then(() => {
    //     for(const team in store.state.leagueTables[leagueId]){
    //       api.getTeam(store, team.team_id)
    //       return {resolved: true}
    //     }
    //   })
    // })
      // return {
      //   table: store.state.leagueTables[leagueId],
      //   league: store.state.leagues[leagueId],
      //   leagueId,
      //   resolved: (store.state.leagueTables[leagueId] &&
      //     store.state.leagues[leagueId]),
      //   teams: store.teams
      // }
  },

}
</script>
<style>
.league__team--logo {
  transform: translateX(-50%);
  margin-left: 28px;
}
</style>
