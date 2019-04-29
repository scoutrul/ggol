<template lang="pug">
  v-layout(class="container")
    h1 Countries
    ul
      li(v-for="country in countries")
        n-link(:to="`/countries/${country.id}`" no-prefetch)
          span {{country.name}}
</template>

<script>

export default {
  async asyncData(context){
    try{
      const countries = await context.app.$axios
        .get('http://livescore-api.com/api-client/countries/list.json')
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
