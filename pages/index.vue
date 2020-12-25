<template>
  <div class="container">
    <h1>Just first page</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'IndexPage',
  async asyncData({ $axios }) {
    const countries = await $axios.$get('https://restcountries.eu/rest/v2/all')
    return { countries }
  },
  computed: {
    ...mapState(['dark']),
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
