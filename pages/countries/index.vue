<template lang="pug">
  v-layout(class="container")
    h1 Countries
    ul
      li(v-for="country in countries") {{country.name}}
</template>

<script>

export default {
  async asyncData(context){
    const params = { 'key': 'Sx4t08xejLuguIFp', 'secret' :'Za7LfWferXMHP7xHECbEKIS4unkZ60o5' }
    try{
      const countries = await context.app.$axios
        .get('http://livescore-api.com/api-client/countries/list.json', params)
        .then(res => res.data.data.country);
      context.store.commit('STORE_COUNTRIES', countries);
      return {countries}
    }

    catch(e){
      console.log(e)
    }
  }
}

</script>
