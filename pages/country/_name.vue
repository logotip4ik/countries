<template>
  <div class="wrapper">
    <div class="toolbar">
      <button @click="$router.push('/')">
        <fontAwesomeIcon icon="arrow-left" />
        <span>Back</span>
      </button>
    </div>
    <div class="content">
      <div class="col">
        <img :src="country.flag" :alt="`Flag for ${country.name}`" />
      </div>
      <div class="col col--padding">
        <h1 class="col--header">{{ country.name }}</h1>
        <div class="info">
          <div v-for="(item, idx) in keys" :key="idx" class="info--item">
            <span class="thick">{{ item.name }}:</span>
            <span v-if="typeof country[item.key] !== 'object'">{{
              country[item.key]
            }}</span>
            <div v-else v-once>
              <span v-for="(text, key) in country[item.key]" :key="key">
                {{ text.name || text }}
              </span>
            </div>
            <!-- {{
              typeof country[item.key] !== 'object'
                ? country[item.key]
                : country[item.key]
            }} -->
          </div>
        </div>
        <div class="border-countries">
          <span v-if="borderCountries.length !== 0">Border Countries: </span>
          <span v-else
            >{{ country.name }} doesn't have any Border Countries
          </span>
          <ul>
            <li
              v-for="(country, idx) in borderCountries"
              :key="idx"
              class="item"
            >
              {{ country }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryPage',
  async asyncData({ $axios, params }) {
    const { name } = params
    const requestName = name.replace(/-/g, ' ')
    const country = (
      await $axios.$get(
        `https://restcountries.eu/rest/v2/name/${requestName}?fullText=true`
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
      transform: translateY(-1px);
    }

    span {
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
}

.content {
  display: flex;
  // flex: 1;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  .col {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-grow: 1;

    &--padding {
      padding: 1rem 0;
      margin: 0 2vw;
    }

    &--header {
      margin-bottom: 2.5rem;
      font-size: 3rem;
    }

    .info {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      max-width: 95%;
      margin-bottom: 2rem;

      &--item {
        margin-bottom: 1rem;
        margin-left: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        & > div {
          display: inline;
        }

        .thick {
          font-weight: 800;
          margin-right: 0.5rem;
        }
        *:not([class='thick']) {
          word-wrap: break-word;
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

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      list-style: none;
    }

    .item {
      padding: 0.25rem 0.75rem;
      margin: 1rem 0.5rem;
      box-shadow: 0 0 10px 0 rgba($color: #000000, $alpha: 0.1);
      border-radius: 0.25rem;
      word-break: keep-all;
      display: inline;
    }
  }
}

@media screen and (min-width: 750px) {
  .col {
    max-width: 45%;

    &--padding {
      max-height: 75vh;
    }
  }

  .info {
    max-height: 200px;
  }
}
</style>
