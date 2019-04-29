<template lang="pug">
  v-layout(class="container")
    h1 {{country_id}}
    div {{leagues}}
</template>

<script>

export default {
  async asyncData({ store, app, params }){
    try{
      const leagues = await app.$axios
        .get('http://livescore-api.com/api-client/leagues/list.json')
        .then(res => res.data.data.league);
      store.commit('STORE_LEAGUES', leagues);
      console.log(store.getters.GET_LEAGUES_BY_ID(444))
      return {
        leagues,
        country_id: params.id
      }
    }

    catch(e){
      console.log(e)
      return {
        country_id: 'none'
      }
    }
  }
}

</script>
