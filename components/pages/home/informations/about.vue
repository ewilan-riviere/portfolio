<template>
  <div class="word-wraping global-info">
    <h1 class="font-ames-croisees mb-4">
      {{ data.name }}
    </h1>
    <div v-html="data.data"></div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.global-info {
  width: 50%;
  margin: auto;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
}
</style>
