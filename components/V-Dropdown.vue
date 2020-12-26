<template>
  <div ref="dropdown" class="dropdown">
    <div class="dropdown--header" @click="toggleDropdown">
      <fontAwesomeIcon icon="chevron-down" />
      <h3>
        {{ currRegion === 'None' ? 'Filter by Region' : currRegion }}
      </h3>
    </div>
    <div class="dropdown__content">
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
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  data: () => ({
    regions: ['None', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
    timeout: null,
    isOpened: false,
    currRegion: 'None',
  }),
  methods: {
    toggleDropdown() {
      this.isOpened = !this.isOpened
      this.$refs.dropdown.classList.toggle('dropdown--active')
      clearTimeout(this.timeout)
      if (this.isOpened) {
        this.timeout = setTimeout(() => {
          this.$refs.dropdown.classList.toggle('dropdown--active')
          this.isOpened = false
        }, 7500)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  padding: 0.75rem 1rem;
  padding-right: 5rem;
  background: white;
  box-shadow: 0 5px 10px 0 rgba($color: #000000, $alpha: 0.2);
  border-radius: 0.25rem;
  margin: 0.5rem 1rem;

  &--active {
    .dropdown--header * {
      color: black;
    }
    .dropdown__content {
      display: block;
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
    display: none;
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
</style>
