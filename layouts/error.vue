<template>
  <div>
    <div>An error occurred ({{ `code ${error.statusCode}` }})</div>
    <nuxt-link to="/"> Home page </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
