<template>
  <div class="wrapper">
    <!-- TODO: add search and filter -->
    <div class="toolbar">
      <VSearch v-model="search"></VSearch>
    </div>
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
  custom: (list, term) => {
    const initialList = []

    // This searchs through country names
    const countryNames = list.filter(({ name }) =>
      name.toLowerCase().includes(term.toLowerCase())
    )
    initialList.push(...countryNames)

    // This searchs through country capitals
    const countryCapitals = list.filter(({ capital }) =>
      capital.toLowerCase().includes(term.toLowerCase())
    )
    initialList.push(...countryCapitals)

    return initialList
  },
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
    search: '',
  }),
  computed: {
    countries() {
      return filters[this.filter](this.rawCountries, this.search)
    },
    ...mapState(['dark']),
  },
  watch: {
    search(val) {
      if (val) this.filter = 'custom'
      else if (!val) this.filter = 'none'
    },
  },
  methods: {
    genKey() {
      return Math.floor(Math.random() * 10000)
    },
  },
  head: {
    title: 'Countries',
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
  padding: 0 1rem 1rem;

  &--center {
    align-items: center;
  }
}

.toolbar {
  max-width: 1600px;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1rem;
}

.clickable {
  cursor: pointer;
}
</style>
