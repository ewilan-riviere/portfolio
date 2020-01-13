<template>
  <div class="passions">
    <div>
      <h1 class="font-ames-croisees mb-4">
        {{ passions.name }}
      </h1>
    </div>
    <div v-for="(passion, passionId) in passions.data" :key="passionId">
      {{ passion.name }} : {{ passion.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Passions',
  props: {
    passions: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.passions {
}
</style>
