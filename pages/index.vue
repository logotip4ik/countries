<template>
  <div class="wrapper">
    <!-- TODO: add search and filter -->
    <div class="toolbar">
      <VSearch v-model="search"></VSearch>
      <VDropdown @select-region="setFilterForRegion"></VDropdown>
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
  region: (list, { regionName }) => {
    return list.filter(({ region }) => region.toLowerCase() === regionName)
  },
  custom: (list, { search }) => {
    const initialList = []

    // This searchs through country names
    const countryNames = list.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
    )
    initialList.push(...countryNames)

    // This searchs through country capitals
    const countryCapitals = list.filter(({ capital }) =>
      capital.toLowerCase().includes(search.toLowerCase())
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
    regionName: '',
  }),
  computed: {
    countries() {
      return filters[this.filter](this.rawCountries, {
        search: this.search,
        regionName: this.regionName,
      })
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
    setFilterForRegion(regionName) {
      this.filter = 'region'
      if (regionName === 'none') {
        this.regionName = ''
        this.filter = 'none'
      } else {
        this.regionName = regionName
      }
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

@media screen and (max-width: 644px) {
  .toolbar {
    justify-content: center;
  }
}

.clickable {
  cursor: pointer;
}
</style>
