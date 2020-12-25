<template>
  <div class="wrapper">
    <!-- TODO: add search and filter -->
    <div class="container">
      <VCountry
        v-for="(country, idx) in countries"
        :key="idx"
        :name="country.name"
        :population="country.population"
        :region="country.region"
        :capital="country.capital"
        :flag="country.flag"
      ></VCountry>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

const filters = {
  none: (list) => list,
}

export default {
  name: 'IndexPage',
  async asyncData({ $axios }) {
    const rawCountries = await $axios.$get(
      'https://restcountries.eu/rest/v2/all'
    )
    return { rawCountries }
  },
  data: () => ({
    filter: 'none',
  }),
  computed: {
    countries() {
      return filters[this.filter](this.rawCountries)
    },
    ...mapState(['dark']),
  },
  methods: {
    genKey() {
      return Math.floor(Math.random() * 10000)
    },
  },
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 90vh;
  max-width: 1800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 1rem;

  &--center {
    align-items: center;
  }
}

.clickable {
  cursor: pointer;
}
</style>
