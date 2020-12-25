<template>
  <div class="input-wrapper">
    <fontAwesomeIcon icon="search" />
    <input
      placeholder="Search for country or capital..."
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'CustomSearch',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.input-wrapper {
  box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.2);
  border-radius: 0.25rem;
  overflow: hidden;
  background: white;
  position: relative;
  max-width: 350px;
  width: 100%;

  svg {
    position: absolute;
    left: 17px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba($color: #000000, $alpha: 0.4);
  }

  input {
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    font: inherit;
    padding: 0.75rem 0;
    padding-left: 3rem;
  }
}
</style>
