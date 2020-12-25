<template>
  <div>
    <VNavbar></VNavbar>
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;800&display=swap');
@import '@/assets/scss/variables';

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  background: $very-light-gray;
}
</style>
