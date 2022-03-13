<template>
  <nav :class="{ dark }">
    <h1 class="clickable" @click="$router.push('/')">Where in the world?</h1>
    <button @click="toggleDarkMode">
      <fontAwesomeIcon icon="moon" /> <span>Dark Mode</span>
    </button>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapState(['dark']),
  },
  methods: {
    ...mapMutations(['toggleDarkMode']),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

nav {
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 0 5px 10px 0 rgba($color: #000000, $alpha: 0.1);

  &.dark {
    background: $dark-blue;
    color: white;

    button {
      color: white;

      &:hover,
      &:focus {
        background: hsl(208, 26%, 27%);
      }
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background: transparent;
    border-radius: 0.25rem;
    padding: 0.75rem 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font: inherit;
    font-size: 0.8rem;
    font-weight: 800;
    transition: background 150ms ease-out;
    cursor: pointer;

    &:hover,
    &:focus {
      background: rgb(223, 223, 223);
    }

    svg {
      width: 1rem;
      height: auto;

      transform: translateY(-1px);
      margin-right: 0.5rem;
    }
  }
}
</style>
