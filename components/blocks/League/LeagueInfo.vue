<template>
  <v-layout column class="league">
    <v-flex>
      <img v-if="data.logo" :src="data.logo" height="80px" />
      <img v-if="data.flag" :src="data.flag" height="80px" />
    </v-flex>
    <h1>{{ data.name }}</h1>
    <v-flex>
      <nuxt-link
        :to="{
          params: { id: data.league_id },
          path: `/leagues/${data.league_id}`
        }"
        >Таблица</nuxt-link
      >
    </v-flex>
    <v-flex>Сезон: {{ data.season }}</v-flex>
    <v-flex>
      Длительность цикла: {{ data.season_start }} -
      {{ data.season_end }}
    </v-flex>
  </v-layout>
</template>

<script>
import api from '@/plugins/api'

export default {
  props: ['data'],
}
</script>
<style lang='stylus'>
.league {
  margin-bottom: 10px;
}
</style>
