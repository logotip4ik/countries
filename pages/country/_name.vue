<template>
  <div :class="{ wrapper: true, 'wrapper--dark': dark }">
    <div class="toolbar">
      <button @click="$router.push('/')">
        <fontAwesomeIcon icon="arrow-left" />
        <span>Back</span>
      </button>
    </div>
    <div class="row">
      <div class="col">
        <img :src="country.flag" :alt="`Flag for ${country.name}`" />
      </div>
      <div class="col col--padding">
        <h1 class="col--header">{{ country.name }}</h1>
        <div class="col__info">
          <div v-for="(item, idx) in keys" :key="idx" class="col__info--item">
            <span class="thick">{{ item.name }}:</span>
            <span v-if="typeof country[item.key] !== 'object'">
              {{ country[item.key] }}
            </span>
            <div v-else v-once>
              {{ getTextContent(country[item.key]) }}
            </div>
          </div>
        </div>
        <div class="border-countries">
          <span v-if="borderCountries.length !== 0">Border Countries: </span>
          <span v-else
            >{{ country.name }} doesn't have any Border Countries
          </span>
          <span
            v-for="(country, idx) in borderCountries"
            :key="idx"
            class="border-countries--item"
          >
            {{ country }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CountryPage',
  async asyncData({ $axios, params }) {
    const { name } = params
    const requestName = name.replace(/-/g, ' ')
    const country = (
      await $axios.$get(
        `https://restcountries.com/rest/v2/name/${requestName}?fullText=true`
      )
    )[0]

    const keys = [
      { name: 'Native Name', key: 'nativeName' },
      { name: 'Popultaion', key: 'population' },
      { name: 'Region', key: 'region' },
      { name: 'Sub Region', key: 'subregion' },
      { name: 'Capital', key: 'capital' },
      { name: 'Top Level Domain', key: 'topLevelDomain' },
      { name: 'Currencies', key: 'currencies' },
      { name: 'Languages', key: 'languages' },
    ]

    const borderCountries = []
    country.borders.forEach(async (countryCode) => {
      const borderCountry = await $axios.$get(
        `https://restcountries.eu/rest/v2/alpha/${countryCode.toLowerCase()}`
      )
      borderCountries.push(borderCountry.name)
    })

    return { country, keys, borderCountries }
  },
  computed: {
    ...mapState(['dark']),
  },
  methods: {
    getTextContent(items) {
      let text = ''

      items.forEach((item, idx) => {
        if (item.name) {
          if (idx !== items.length - 1) {
            text += `${item.name}, `
          } else {
            text += item.name
          }
        } else if (!item.name) {
          if (idx !== items.length - 1) {
            text += `${item}, `
          } else {
            text += item
          }
        }
      })

      return text
    },
  },
  head() {
    return {
      title: `Country: ${this.country.name}`,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.wrapper {
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;

  &--dark {
    color: white !important;

    .toolbar button {
      background: $dark-blue;
      * {
        color: hsl(207, 35%, 57%);
      }
      &:hover * {
        color: white;
      }
    }

    .border-countries--item {
      background: $dark-blue;
    }
  }
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
      transform: translateY(-1px);
    }

    span {
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
}

.row {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 1rem;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  .col {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    &--padding {
      padding: 1rem 2rem;
    }

    &--header {
      margin-bottom: 2.5rem;
      font-size: 3rem;
    }

    &__info {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      column-gap: 1rem;
      width: 100%;
      margin-bottom: 2rem;

      &--item {
        margin-bottom: 1rem;
        padding: 0 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        & > div {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .thick {
          font-weight: 800;
          margin-right: 0.5rem;
        }
      }
    }
  }

  .border-countries {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    span:first-child {
      font-weight: 800;
      font-size: 1.05rem;
    }

    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
    }

    &--item {
      padding: 0.25rem 0.75rem;
      margin: 1rem 0.5rem;
      box-shadow: 0 0 10px 0 rgba($color: #000000, $alpha: 0.1);
      border-radius: 0.25rem;
      word-break: keep-all;
    }
  }
}

@media screen and (min-width: 750px) {
  .col {
    max-width: 40%;
  }

  .info {
    max-height: 200px;
  }
}
</style>
