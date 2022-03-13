<template>
  <div
    :class="{
      dropdown: true,
      'dropdown--dark': dark,
      'dropdown--active': isOpened,
    }"
  >
    <div class="dropdown--header" @click="toggleDropdown">
      <h3>
        {{ currRegion === 'None' ? 'Filter by Region' : currRegion }}
      </h3>
      <fontAwesomeIcon icon="chevron-down" />
    </div>
    <div class="dropdown__content">
      <div
        v-for="(region, idx) in regions"
        :key="idx"
        class="dropdown__content--item"
        @click="handleClick(region)"
      >
        <span>{{ region }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Dropdown',
  data: () => ({
    regions: ['None', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
    timeout: null,
    isOpened: false,
    currRegion: 'None',
  }),
  computed: {
    ...mapState(['dark']),
  },
  methods: {
    handleClick(region) {
      this.$emit('select-region', region.toLowerCase())
      this.toggleDropdown()
      this.currRegion = region
    },
    toggleDropdown() {
      this.isOpened = !this.isOpened
      clearTimeout(this.timeout)
      if (this.isOpened) {
        this.timeout = setTimeout(() => {
          this.isOpened = false
        }, 7500)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.dropdown {
  position: relative;
  margin: 0.5rem 1rem;

  &--dark {
    .dropdown--header {
      background: $dark-blue;
      &:hover * {
        color: white;
      }
      * {
        color: hsl(207, 35%, 57%);
      }
    }

    .dropdown__content {
      background: $dark-blue;
      color: white;

      &--item:hover {
        background: hsl(208, 26%, 27%);
      }
    }

    &.dropdown--active .dropdown--header * {
      color: white;
    }
  }

  &--active {
    .dropdown--header * {
      color: black;
    }

    .dropdown__content {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }

  &--header {
    padding: 0.75rem 1rem;
    background: white;
    box-shadow: 0 5px 10px 0 rgba($color: #000000, $alpha: 0.2);
    border-radius: 0.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;

    * {
      font-weight: 400;
      color: rgba($color: #000000, $alpha: 0.6);
      transition: color 200ms ease-in;
    }

    &:hover * {
      color: black;
    }

    svg {
      width: 1rem;
      height: auto;

      margin-left: 1.5rem;
    }
  }

  &__content {
    position: absolute;
    border-radius: 0.25rem;
    top: 120%;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 5px 10px 0 rgba($color: #000000, $alpha: 0.2);
    height: fit-content;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: clip-path 200ms ease-out;

    &--item {
      font-size: 1.1rem;
      cursor: pointer;
      padding: 0.75rem 2rem;

      &:hover {
        background: rgba($color: #000000, $alpha: 0.2);
      }
    }
  }
}
</style>
