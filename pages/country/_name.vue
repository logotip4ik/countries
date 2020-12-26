<template>
  <div class="wrapper">
    <div class="toolbar">
      <button @click="$router.push('/')">
        <fontAwesomeIcon icon="arrow-left" />
        <span>Back</span>
      </button>
    </div>
    <div class="content">
      <h2>This is country: {{ country }}</h2>
    </div>
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
    return { country: country[0] }
  },
  head() {
    return {
      title: `Country: ${this.country.name}`,
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
}
.toolbar {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 3rem;

  button {
    border: none;
    border-radius: 0.25rem;
    background: white;
    box-shadow: 0 5px 10px 0 rgba($color: #000000, $alpha: 0.2);
    padding: 0.5rem 2.5rem;
    display: flex;
    align-items: center;
    font: inherit;
    cursor: pointer;

    * {
      color: rgba($color: #000000, $alpha: 0.6);
      transition: color 200ms ease-in;
    }

    &:hover * {
      color: rgba($color: #000000, $alpha: 1);
    }

    svg {
      margin-right: 1.5rem;
    }

    span {
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
}
</style>
