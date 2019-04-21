import get from 'lodash/get'
import axios from 'axios'
import each from 'lodash/each'
import store from '../store'

const url = 'https://api-football-v1.p.rapidapi.com'
const token = 'fe81e0a8ecmsh0ef111a4d181d40p176c6ejsn1f163ba39e44'

axios.defaults.headers.common['X-RapidAPI-Key'] = token

export default {
  getApi(path) {
    return axios.get(`${url}/${path}`).then(res => res)
  },
  getLiveFixtures() {
    return this.getApi('fixtures/live').then(res => {
      const { fixtures } = res.data.api
      store.commit('STORE_LIVE_FIXTURES', { fixtures })
    })
  },
  getTodayFixtures() {
    const date = '2019-04-07'
    return this.getApi(`fixtures/date/${date}`).then(res => {
      const { fixtures } = res.data.api
      store.commit('STORE_TODAY_FIXTURES', { fixtures })
    })
  },
  apiService(entityId, path) {
    if (!entityId) {
      return new Promise(resolve => resolve())
    }
    if (store.state.leagues[entityId]) {
      return new Promise(resolve => resolve())
    }
    return axios.get(`${url}/${path}/${entityId}`).then(res => {
      const entities = 'leagues'
      const league = get(`res.data.api.${entities}[${entityId}]`, {})
      store.commit('STORE_LEAGUE', {
        entityId,
        league
      })
    })
  },
  getTeam(teamId) {
    if (!teamId) {
      return new Promise(resolve => resolve())
    }
    if (store.state.teams[teamId]) {
      return new Promise(resolve => resolve())
    }
    return axios.get(`${url}/teams/team/${teamId}`).then(res => {
      const team = res.data.api.teams[teamId]
      store.commit('STORE_TEAM', {
        teamId,
        team
      })
    })
  },
  getFixture(fixtureId) {
    if (!fixtureId) {
      return new Promise(resolve => resolve())
    }
    if (store.state.fixtures[fixtureId]) {
      return new Promise(resolve => resolve())
    }
    return axios.get(`${url}/fixtures/id/${fixtureId}`).then(res => {
      const fixture = res.data.api.fixtures[fixtureId]
      store.commit('STORE_FIXTURE', {
        fixtureId,
        fixture
      })
    })
  },
  getLineUp(fixtureId) {
    if (!fixtureId) {
      return new Promise(resolve => resolve())
    }
    if (store.state.lineups[fixtureId]) {
      return new Promise(resolve => resolve())
    }
    return axios.get(`${url}/lineups/${fixtureId}`).then(res => {
      const lineups = res.data.api.lineUps
      store.commit('STORE_LINEUP', { fixtureId, lineups })
    })
  },
  getEvents(fixtureId) {
    if (!fixtureId) {
      return new Promise(resolve => resolve())
    }
    if (store.state.events[fixtureId]) {
      return new Promise(resolve => resolve())
    }
    return axios.get(`${url}/events/${fixtureId}`).then(res => {
      const events = res.data.api.events
      store.commit('STORE_EVENTS', { fixtureId, events })
    })
  },
  getStatistics(fixtureId) {
    if (!fixtureId) {
      return new Promise(resolve => resolve())
    }
    if (store.state.events[fixtureId]) {
      return new Promise(resolve => resolve())
    }
    return axios.get(`${url}/statistics/fixture/${fixtureId}`).then(res => {
      const statistics = res.data.api.statistics
      store.commit('STORE_STATISTICS', { fixtureId, statistics })
    })
  },
  getLeagues(path = 'leagues') {
    if (store.state.leaguesCount) {
      return new Promise(resolve => resolve())
    }
    return axios.get(`${url}/${path}`).then(res => {
      debugger
      const leagues = res.data.api.leagues
      const results = res.data.api.results
      store.commit('STORE_LEAGUES', { leagues, results })
    })
  },
  getLeague(leagueId) {
    if (!leagueId) {
      return new Promise(resolve => resolve())
    }
    if (store.state.leagues[leagueId]) {
      return new Promise(resolve => resolve())
    }
    return axios.get(`${url}/leagues/league/${leagueId}`).then(res => {
      const league = res.data.api.leagues[leagueId]
      store.commit('STORE_LEAGUE', {
        leagueId,
        league
      })
    })
  },
  getLeagueTable(leagueId) {
    if (!leagueId) {
      return new Promise(resolve => resolve())
    }
    if (store.state.leagueTables[leagueId]) {
      return new Promise(resolve => resolve())
    }
    return axios.get(`${url}/leagueTable/${leagueId}`).then(res => {
      const table = res.data.api.standings[0]
      store.commit('STORE_LEAGUE_TABLE', { leagueId, table })
    })
  },
  getH2H(teamId1, teamId2) {
    if (!teamId1 || !teamId2) {
      return new Promise(resolve => resolve())
    }
    return axios
      .get(`${url}/fixtures/h2h/${teamId1}/${teamId2}`)
      .then(res => {
        const fixtures = res.data.api.fixtures
        return each(fixtures, fixture => {
          const fixtureId = fixture.fixture_id
          store.commit('STORE_FIXTURE', {
            fixtureId,
            fixture
          })
          return fixture
        })
      })
  }
}
