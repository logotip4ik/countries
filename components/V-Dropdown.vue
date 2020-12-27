<template>
  <div
    ref="dropdown"
    :class="{
      dropdown: true,
      'dropdown--dark': dark,
      'dropdown--active': isOpened,
    }"
  >
    <div class="dropdown--header" @click="toggleDropdown">
      <fontAwesomeIcon icon="chevron-down" />
      <h3>
        {{ currRegion === 'None' ? 'Filter by Region' : currRegion }}
      </h3>
    </div>
    <transition name="fade" mode="out-in">
      <div v-show="isOpened" class="dropdown__content">
        <div
          v-for="(region, idx) in regions"
          :key="idx"
          class="dropdown__content--item"
          @click="
            $emit('select-region', region.toLowerCase())
            toggleDropdown()
            currRegion = region
          "
        >
          <span>{{ region }}</span>
        </div>
      </div>
    </transition>
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
  padding: 0.75rem 1rem;
  padding-right: 5rem;
  background: white;
  box-shadow: 0 5px 10px 0 rgba($color: #000000, $alpha: 0.2);
  border-radius: 0.25rem;
  margin: 0.5rem 1rem;

  &--dark {
    background: $dark-blue;

    .dropdown--header {
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
  }

  &--header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    * {
      font-weight: 400;
      color: rgba($color: #000000, $alpha: 0.6);
      transition: color 200ms ease-in;
    }

    &:hover * {
      color: black;
    }

    svg {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
