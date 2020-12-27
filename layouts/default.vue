<template>
  <div>
    <VNavbar></VNavbar>
    <Nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['dark']),
  },
  watch: {
    dark(val) {
      document.body.classList.toggle('dark')
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;800&display=swap');
@import '@/assets/scss/variables';

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: background 200ms ease-in;
}

html,
body {
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  background: $very-light-gray;
  min-height: 100vh;

  &.dark {
    background: $very-dark-blue;
  }
}
</style>
