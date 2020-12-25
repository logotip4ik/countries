<template>
  <div :class="{ country: true, 'country--dark': dark }">
    <img :src="flag" :alt="`flag for ${name} country`" class="country--image" />
    <div class="country--content">
      <h2 class="clickable" @click="openCurrCountry">{{ name }}</h2>
      <ul>
        <li><span>Population:</span> {{ population }}</li>
        <li><span>Region:</span> {{ region }}</li>
        <li><span>Capital:</span> {{ capital }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CountryCard',
  props: {
    name: {
      type: String,
      required: true,
    },
    population: {
      type: Number,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    capital: {
      type: String,
      required: true,
    },
    flag: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(['dark']),
  },
  methods: {
    openCurrCountry() {
      const urlName = this.name.toString().toLowerCase().replace(/ /g, '-')
      this.$router.push(`/country/${urlName}`)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.country {
  max-width: 350px;
  border-radius: 0.25rem;
  margin: 1rem 2rem 5rem;
  overflow: hidden;
  background: white;
  box-shadow: 0 0 20px -10px rgba($color: #000000, $alpha: 0.2);
  min-height: 450px;

  &--image {
    width: 100%;
    height: auto;
    display: block;
  }

  &--content {
    padding: 1.5rem;

    h2 {
      margin-bottom: 2rem;
    }

    ul {
      list-style: none;

      li span {
        font-weight: 600;
      }
    }
  }
}
</style>
