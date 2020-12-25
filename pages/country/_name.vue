<template>
  <div class="container">
    <h1>Hello world</h1>
    <h2>This is country: {{ country }}</h2>
  </div>
</template>

<script>
export default {
  name: 'CountryPage',
  async asyncData({ $axios, params }) {
    const { name } = params
    const requestName = name.replace(/-/g, ' ')
    const country = await $axios.$get(
      `https://restcountries.eu/rest/v2/name/${requestName}?fullText=true`
    )
    return { country }
  },
}
</script>

<style lang="scss" scoped></style>
