// import Vue from 'vue'
// import Vuex from 'vuex'
//
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
//
// Vue.use(Vuex)
//
// const createStore = () =>
//   new Vuex.Store({
//     state: () => ({
//       teams: {},
//       teamsCount: 0,
//       leagues: [],
//       leaguesCount: 0,
//       fixtures: {},
//       liveFixtures: {},
//       todayFixtures: {},
//       lineups: {},
//       events: {},
//       statistics: {},
//       leagueTables: {},
//       countries: [],
//       locale: 'ru'
//     }),
//     getters,
//     mutations,
//     actions
//   })
//
// export default createStore

export const state = () => ({
  teams: {},
  teamsCount: 0,
  leagues: [],
  leaguesCount: 0,
  fixtures: {},
  liveFixtures: {},
  todayFixtures: {},
  lineups: {},
  events: {},
  statistics: {},
  leagueTables: {},
  countries: [],
  locale: 'ru'
})

export { actions, mutations, getters }
