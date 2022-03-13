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
